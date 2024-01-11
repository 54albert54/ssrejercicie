import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { App } from "../../app/containers/App";
import { ServerStyleSheet } from "styled-components";
import { template } from "./template";

export const renderServerApp = (url: string, initialProps = {}) => {
  try {
    const sheet = new ServerStyleSheet();

    const stream = renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      )
    );
    const styleTags = sheet.getStyleTags()

    const html = template(stream, initialProps,  styleTags);
    return html;



  } catch (error) {
    throw new Error("error pick un App", error);
  }
};
