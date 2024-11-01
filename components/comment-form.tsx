'use client'

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextMarkdown from "./text-markdown";
import { Button } from "./ui/button";
import { setUserComment } from "@/store/user";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


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
      <div>
        <h1>Queremos que dejes tus palabras para los papás de Dylan</h1>
      </div>
      <div>
        <TextMarkdown onChange={handleChange} />
        <Button className="w-full mt-6" onClick={handleSubmit}>Listo</Button>
      </div>

      <div>
        {/* <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar> */}

      </div>
    </>
  );
}
