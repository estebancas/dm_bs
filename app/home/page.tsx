import React from "react";

import Agenda from "@/components/agenda";
import CommentForm from "@/components/comment-form";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <CommentForm />
      <Agenda />
    </div>
  );
}
