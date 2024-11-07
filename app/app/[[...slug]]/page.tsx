"use client";
import React, { useMemo } from "react";

import { useAuth } from "@/hooks/useAuth";
import Agenda from "@/components/agenda";
import CommentForm from "@/components/comment-form";
import Data from "@/content/survey-options.json";
import { SurveyForm } from "@/components/survey-form";
import { Survey as ISurvey } from "@/types/survey";
import UserProfile from "@/components/user-profile";

type Props = {
  params: {
    slug?: string[];
  };
};

const paths = ["home", "survey", "profile"];

export default function AppPage({ params }: Props) {
  useAuth();
  const { slug } = params;

  const routeSlug = useMemo(() => {
    if (slug && paths.includes(slug[0])) {
      return slug[0];
    }
    return "home";
  }, [slug]);

  if (routeSlug === "profile") {
    return <UserProfile />;
  }

  if (routeSlug === "survey") {
    return <SurveyForm data={Data as ISurvey[]} />;
  }

  return (
    <div className="flex flex-col justify-center">
      <CommentForm />
      <Agenda />
    </div>
  );
}
