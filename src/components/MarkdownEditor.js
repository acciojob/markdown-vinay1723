import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  // Initial string with heading at start of line
  const [text, setText] = useState("# Heading");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="app">
      {/* Markdown Input Area */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Markdown Preview Area */}
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
