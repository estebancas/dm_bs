"use client";

// import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "./ui/label";
import Data from "@/content/survey-options.json";

interface Survey {
  label: string;
  options?: { text: string }[];
  format: string;
  type: "select" | "input";
}

export function SurveyForm() {
  const SelectComp = ({ survey }: { survey: Survey }, key: string) => {
    if (survey.type !== "select") return null;

    return (
      <div className="flex flex-col justify-start" key={key}>
        <Label className="mb-1">{survey.label}</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona una opcion" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {survey.options && survey.options.length
                ? survey.options.map((option, i) => (
                    <SelectItem key={`option-${i}-${key}`} value={option.text}>
                      {option.text}
                    </SelectItem>
                  ))
                : null}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <div>
      <h2>Encuesta de deseos</h2>
      <p>
        Aca te encuentras una lista donde tienes que escoger la opcion con la
        que mas te identifiques
      </p>
      {Data.map((data, i) => (
        <>
          <SelectComp survey={data as Survey} key={`survey-question-${i}`} />
        </>
      ))}
    </div>
  );
}
