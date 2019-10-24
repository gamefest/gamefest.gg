import { isNil } from "./object";

const externalRegex = /^(?:(?:http|https):\/\/(?!(?:www\.)?gamefest.gg)[\w./=?#-_]+)|(?:mailto:.+)$/;
export function isExternal(href) {
  return externalRegex.test(href);
}

const fileRegex = /^[\w./=:?#-]+[.]\w+$/;
export function isFile(href) {
  return fileRegex.test(href);
}

export function isEmptyOrNil(string) {
  if (typeof string !== "string") return true;
  return isNil(string) || string.trim().length === 0;
}

const logPrefix = "gamefest.gg";
export const log = message => console.log(`[${logPrefix}] ${message}`);

export const addMissingUnit = dimension =>
  isNaN(dimension) ? dimension : `${dimension}px`;

// Credit to @mhagemann
// https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
export function slugify(string) {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

// Pretty-formats a list of objects using a conjunction and oxford-style commas
export function formatList(array, conjunction = "and") {
  if (array.length === 1) return array[0].toString();
  else if (array.length === 2) {
    return `${array[0].toString()} ${conjunction} ${array[1].toString()}`;
  } else {
    allButLast = array.filter((_, i) => i !== array.length - 1).join(", ");
    return `${allButLast}, ${conjunction} ${array[
      array.length - 1
    ].toString()}`;
  }
}

// Pretty-formats a place number
export function formatPlace(place, useHTML = false) {
  const lsd = place % 10;
  const superscript = useHTML ? s => `<sup>${s}</sup>` : s => s;
  if (lsd === 1) {
    return place + superscript("st");
  } else if (lsd === 2) {
    return place + superscript("nd");
  } else if (lsd === 3) {
    return place + superscript("rd");
  } else {
    return place + superscript("th");
  }
}
