import React from "react";

export function getTextContents(children) {
  let contents = "";
  React.Children.map(children, child => {
    if (typeof child === "string") {
      contents += child;
    }
  });
  return contents;
}
