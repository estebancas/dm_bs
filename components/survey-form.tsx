"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Label } from "./ui/label";
import Data from "@/content/survey-options.json";
import { Input } from "./ui/input";
import Icon from "../public/images/dm-skate-icon.png";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Question, QuestionForm } from "@/types/survey";
import { updateSurvey } from "@/lib/api/user";
import { useDispatch } from "react-redux";
import { setUserSurvey } from "@/store/user";
import { useAppSelector } from "@/hooks/store";
import { useAuth } from "@/hooks/useAuth";

interface Survey {
  id: number;
  label: string;
  options?: { text: string }[];
  format: "number" | "string";
  type: "select" | "input";
  graphicType?: string;
}

export function SurveyForm() {
  useAuth();
  const dispatch = useDispatch();
  const [surveyData, setSurveyData] = useState<QuestionForm | undefined>();
  const survey = useAppSelector(state => state.user.userData?.survey)

  useEffect(() => {
    if (Data) {
      setSurveyData((prev) => {
        const initialValues = { ...prev };

        Data.forEach((d) => {
          if (d.type === "input") {
            initialValues[d.id] = {
              answer: "",
              format: d.format as "string" | "number",
              id: d.id,
              label: d.label,
              type: d.type,
            };
          }
        });

        return initialValues;
      });
    }
  }, [Data]);

  const submitSurvey = async () => {
    if (surveyData) {
      const response = await updateSurvey(surveyData);

      if (response) {
        dispatch(setUserSurvey(surveyData as any));
      }
    }
  };

  const handleChange = (data: Question) => {
    setSurveyData((prev) => ({
      ...prev,
      [data.id]: data,
    }));
  };

  const SelectComp = ({ survey }: { survey: Survey }) => {
    if (survey.type !== "select") return null;

    return (
      <div className="flex flex-col justify-start mb-10">
        <Label className="mb-2 leading-1">{survey.label}</Label>
        <Select
          value={surveyData ? surveyData[survey.id]?.answer : ""}
          onValueChange={(value) =>
            handleChange({
              answer: value,
              format: survey.format,
              id: survey.id,
              label: survey.label,
              type: survey.type,
            })
          }
        >
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

  const InputComponent = ({ survey }: { survey: Survey }) => {
    if (survey.type !== "input") return null;

    return (
      <div className="flex flex-col justify-start mb-10 w-full">
        <Label className="mb-4">{survey.label}</Label>
        <Input
          value={surveyData![survey.id]?.answer}
          placeholder="Ingrese su respuesta"
          className="w-full"
          type={survey.format}
          onChange={(e) =>
            handleChange({
              answer: e.target.value,
              format: survey.format,
              id: survey.id,
              label: survey.label,
              type: survey.type,
            })
          }
        />
      </div>
    );
  };

  if (survey) {
    return <div>Encuesta enviada, espera a los demas participantes</div>;
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
      <h2 className="font-bold item text-xl text-center mb-4">
        Encuesta de deseos
      </h2>
      <p className="text-sm mb-4 text-center">
        Aca te encuentras una lista donde tienes que escoger la opcion con la
        que mas te identifiques. Esta actividad plantea ser algo interesante
        para adivinar ahorita y algo gracioso para comparar y recordar en el
        futuro 😊
      </p>
      {Data && surveyData
        ? Data.map((data, i) => (
            <div key={`survey-question-${i}-${data.id}`} className="w-full">
              <SelectComp survey={data as Survey} />
              <InputComponent survey={data as Survey} />
            </div>
          ))
        : null}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">Listo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Estas seguro que deseas continuar?</DialogTitle>
            <DialogDescription>
              Si estas seguro de tus respuestas presiona el boton de aceptar.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-3 flex flex-row gap-2 justify-end">
            <DialogClose asChild>
              <Button className="flex-none" variant={"secondary"}>
                Cancelar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                className="flex-none"
                onClick={submitSurvey}
              >
                Aceptar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
