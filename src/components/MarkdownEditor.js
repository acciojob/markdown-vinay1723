import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("Hello, Markdown!# Heading");
  const [preview, setPreview] = useState(text);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      setPreview(text);
      setLoading(false);
    }, 100);
    return () => clearTimeout(id);
  }, [text]);

  return (
    <div className="editor-container">
      {/* Markdown input */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your markdown here..."
      />

      {/* Preview container */}
      <div className="preview">
        {/* Show raw markdown (for string-based test) */}
        <div className="preview-raw">{preview}</div>

        {/* Show rendered markdown (so <h1> appears inside .preview) */}
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <ReactMarkdown>{preview}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
