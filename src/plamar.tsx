import React from "react";
import { hydrate, render } from "react-dom";
import PlamarPage from './pages/PlamarPage';

const rootElement = document.getElementById("root");
if(rootElement)
if (rootElement.hasChildNodes()) {
  hydrate(<PlamarPage />, rootElement);
} else {
  render(<PlamarPage />, rootElement);
}