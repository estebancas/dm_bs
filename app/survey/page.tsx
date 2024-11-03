"use client";

import React from "react";

import { SurveyForm } from "@/components/survey-form";
import Data from "@/content/survey-options.json";
import { Survey as ISurvey } from "@/types/survey";

export default function Survey() {
  return <SurveyForm data={Data as ISurvey[]} />;
}
