const externalRegex = /^(?:http|https):\/\/(?!(?:www\.)?jazevedo.me)[\w./=?#-_]+$/;
export function isExternal(href) {
  return externalRegex.test(href);
}

const fileRegex = /^[\w./=:?#-]+[.]\w+$/;
export function isFile(href) {
  return fileRegex.test(href);
}
