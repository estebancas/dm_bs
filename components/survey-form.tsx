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
import { Input } from "./ui/input";


interface Survey {
  label: string;
  options?: { text: string }[];
  format: string;
  type: "select" | "input";
}

console.log(Data)

export function SurveyForm() {
  const SelectComp = ({ survey }: { survey: Survey }) => {
    if (survey.type !== "select") return null;

    return (
      <div className="flex flex-col justify-start mb-10">
        <Label className="mb-2 leading-1">{survey.label}</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona una opcion" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {survey.options && survey.options.length
                ? survey.options.map((option, i) => (
                    <SelectItem key={`option-${i}`} value={option.text}>
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

  const InputComponent = ({survey} : {survey: Survey}) => {
    if(survey.type !== 'input') return null;

    return (
      <div className="flex flex-col justify-start mb-10">
        <Label className="mb-4">{survey.label}</Label>
        <Input placeholder="Ingrese su respuesta" className="w-full" type={survey.format}/>

      </div>
    )
    
  }

  return (
    <div>
      <h2 className="font-bold item text-xl mb-4">Encuesta de deseos</h2>
      <p className="text-sm mb-3 from-accent-foreground">
        Aca te encuentras una lista donde tienes que escoger la opcion con la
        que mas te identifiques
      </p>
      {Data.map((data, i) => (
        <div key={`survey-question-${i}`}>
          <SelectComp survey={data as Survey} />
          <InputComponent survey={data as Survey}/>
        </div>
          
       
      ))}
    </div>
  );
}
