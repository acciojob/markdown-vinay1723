// MarkdownEditor.js
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("Hello, Markdown! # Heading"); // 👈 notice the space before "# Heading"
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="preview">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <ReactMarkdown>{text}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
