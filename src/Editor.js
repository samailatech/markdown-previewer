import React from 'react';

function Editor({ markdown, onChange }) {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Editor;
