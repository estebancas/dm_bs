"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextMarkdown from "./text-markdown";
import { Button } from "./ui/button";
import { setUserComment } from "@/store/user";
import { updateComment } from "@/lib/api/user";
import Image from "next/image";
import Icon from "../public/images/dm-comment.png";
import { useAppSelector } from "@/hooks/store";

export default function CommentForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user.userData);

  const handleChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (text) {
      const response = await updateComment(text);

      if (response) {
        dispatch(setUserComment(text));
      }
    }

    setLoading(false);
  };

  if (user?.comment) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded border-[2px] border-primary mb-8"
        src={Icon}
        alt="icon"
        width={150}
        height={150}
      />
      <h2 className="text-xl text-center font-bold mb-2">
        Agrega un comentario
      </h2>
      <p className="text-base text-center mb-4">
        Sabemos que sos muy especial para Jose y Merly, por eso queremos que
        dejes tus palabras para los papás de Dylan
      </p>

      <TextMarkdown onChange={handleChange} />

      <Button disabled={loading} className="w-full mt-6" onClick={handleSubmit}>
        Listo
      </Button>
    </div>
  );
}
