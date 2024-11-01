'use client'

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextMarkdown from "./text-markdown";
import { Button } from "./ui/button";
import { setUserComment } from "@/store/user";
import Drawer from "@/components/drawer"


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
    <>
      <div className="mb-4">
        <h2 className="font-bold text-xl text-center">Hola!</h2>
        <p className="text-center">Sabemos que sos muy especial para Jose y Merly, por eso queremos que dejes tus palabras para los papás de Dylan</p>
      
        <TextMarkdown onChange={handleChange} />
      
        <Button className="w-full mt-6" onClick={handleSubmit}>Listo</Button>
       
        <Drawer/>

      </div>
    </>
  );
}
