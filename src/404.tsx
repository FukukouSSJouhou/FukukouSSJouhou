import React from "react";
import { hydrate, render } from "react-dom";
import Page404 from './pages/Page404';

const rootElement = document.getElementById("root");
if(rootElement)
if (rootElement.hasChildNodes()) {
  hydrate(<Page404 />, rootElement);
} else {
  render(<Page404 />, rootElement);
}