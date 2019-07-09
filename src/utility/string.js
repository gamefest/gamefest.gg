import { isNil } from "./object";

const externalRegex = /^(?:http|https):\/\/(?!(?:www\.)?jazevedo.me)[\w./=?#-_]+$/;
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
