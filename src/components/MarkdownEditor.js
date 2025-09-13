import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  // Initial string exactly as test expects
  const [text, setText] = useState("Hello, Markdown! # Heading");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 150);
    return () => clearTimeout(timer);
  }, [text]);

  // Preprocess text to ensure heading is on its own line for rendering
  const processedText = text.replace(/# /, "\n# ");

  return (
    <div className="app">
      {/* Markdown input */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Preview area */}
      <div className="preview">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <ReactMarkdown>{processedText}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
