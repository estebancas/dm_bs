import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextMarkdown from "./text-markdown";
import { Button } from "./ui/button";
import { setUserComment } from "@/store/user";

export default function CommentForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState<string | undefined>();

  const handleChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    if (text) {
      dispatch(setUserComment(text));
    }
  };

  return (
    <div>
      <TextMarkdown onChange={handleChange} />
      <Button onClick={handleSubmit}>Listo</Button>
    </div>
  );
}
