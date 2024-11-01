import Agenda from "@/components/agenda";
import CommentForm from "@/components/comment-form";
import { useAppSelector } from "@/hooks/store";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

export default function Home() {
  useAuth();
  const user = useAppSelector((state) => state.user.userData);

  return (
    <div className="flex flex-col justify-center">
      {user && !user.comment ? <CommentForm /> : <Agenda />}
    </div>
  );
}
