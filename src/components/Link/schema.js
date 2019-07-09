module.exports = `
  type Link @dontInfer {
    href: String
    text: String
    icon: String
    class: String
    action: String
    newTab: Boolean
    disabled: Boolean
    download: Boolean
  }
`;
