import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...

![React Logo w/ Text](https://goo.gl/Umyytc)

**Happy Coding!**
`);

  return (
    <div className="App">
      <Editor markdown={markdown} onChange={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
