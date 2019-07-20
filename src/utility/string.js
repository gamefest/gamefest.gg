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
