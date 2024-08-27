import React from 'react';
import { marked } from 'marked';

function Preview({ markdown }) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { breaks: true }),
      }}
    />
  );
}

export default Preview;
