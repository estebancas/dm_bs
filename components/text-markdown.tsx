import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

type Props = {
  onChange: (html: string) => void;
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list"
];

export default function TextMarkdown({ onChange }: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      formats={formats}
      style={{ height: 200, marginBottom: '5rem', marginTop: '2rem' }}
    />
  );
}
