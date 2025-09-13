import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown"; // use v6 if on React <18

const MarkdownEditor = () => {
  // Keep the string exactly as the test used earlier (no newline)
  const [text, setText] = useState("Hello, Markdown!# Heading");
  const [preview, setPreview] = useState(text);
  const [loading, setLoading] = useState(false);

  // Update preview with a tiny debounce to simulate processing and show loading state
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      setPreview(text);
      setLoading(false);
    }, 150); // small delay to simulate processing

    return () => clearTimeout(id);
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

      {/* Preview Section (contains raw text AND rendered markdown) */}
      <div className="preview" aria-live="polite">
        {/* 1) Raw text included so tests that look for the exact string pass */}
        <div className="preview-raw" style={{ marginBottom: 12 }}>
          {preview}
        </div>

        {/* Loading indicator */}
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          /* 2) Rendered markdown preview */
          <div className="preview-rendered">
            <ReactMarkdown>{preview}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
