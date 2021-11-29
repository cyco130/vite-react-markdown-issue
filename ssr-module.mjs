import React from "react";
import { renderToString } from "react-dom/server.js";
import ReactMarkdown from "react-markdown";

console.log(
	renderToString(React.createElement(ReactMarkdown, {}, "Hello **world**!")),
);
