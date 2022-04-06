import React from "react";
import { hydrate, render } from "react-dom";
import AppsPage from './pages/AppsPage';
const rootElement = document.getElementById("root");
if(rootElement)
if (rootElement.hasChildNodes()) {
  hydrate(<AppsPage />, rootElement);
} else {
  render(<AppsPage />, rootElement);
}