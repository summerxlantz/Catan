import React from "react";
import "./App.css";
import Board from "./pages/Board";

function App() {
  return <Board />;
}

export default App;


/*

<html>
<head>
<script>
  interface SpanProps {
    content: string;
    style: string;
  }

  function createSpan({ style, content }: SpanProps) {
    const span = document.createElement('span', { style: style });
    
    span.innerText = content;
    // <span>some text</span>
  }

  function showEditForm() {
    createDiv();
    createParagraph();
    createSpan({ style: '', content: 'some text', height: 25 });
  }
</script>
</head>
<body>
  <h1>My Blog</h1>
  <p>blah blah blah</p>
  <button onClick="showEditForm">Edit post</button>

  <div style="display: hidden" id="edit-form">
    <label>Title</label>
    <input name="title" value="My Blog" />
    ...
  </div>
</body>

*/
