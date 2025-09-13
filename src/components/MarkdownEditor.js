import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("# Hello, Markdown!");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  // Update preview in real-time
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setPreview(text);
      setLoading(false);
    }, 200); // small delay to simulate live processing

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div className="editor-container">
      {/* Input Section */}
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your markdown here..."
      />

      {/* Preview Section */}
      <div className="preview">
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
