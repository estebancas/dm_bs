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
import { QuestionForm, Survey } from "@/types/survey";
import { updateSurvey } from "@/lib/api/user";
import { useDispatch } from "react-redux";
import { setUserSurvey } from "@/store/user";
import { useAppSelector } from "@/hooks/store";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  data: Survey[];
};

export function SurveyForm({ data }: Props) {
  useAuth();
  const dispatch = useDispatch();
  const [responses, setResponses] = useState<QuestionForm>({});
  const survey = useAppSelector((state) => state.user.userData?.survey);

  useEffect(() => {
    const initialResponses: QuestionForm = {};
    data.forEach((question) => {
      initialResponses[question.id] = {
        ...question,
        answer: "",
      };
    });

    setResponses(initialResponses);
  }, [data]);

  const submitSurvey = async () => {
    if (responses) {
      const response = await updateSurvey(responses);

      if (response) {
        dispatch(setUserSurvey(responses));
      }
    }
  };

  const handleChange = (id: number, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [id]: { ...prev[id], answer: value },
    }));
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
      {data && data.length && Object.keys(responses).length
        ? data.map((formItem) => {
            if (formItem.type === "select") {
              return (
                <div
                  key={`survey-form-item-${formItem.id}`}
                  className="flex flex-col justify-start mb-10 w-full"
                >
                  <Label className="mb-2 leading-1">{formItem.label}</Label>
                  <Select
                    value={responses[formItem.id].answer}
                    onValueChange={(value) => handleChange(formItem.id, value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona una opcion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {formItem.options &&
                        formItem.options.length
                          ? formItem.options.map((option, i) => (
                              <SelectItem
                                key={`option-${i}`}
                                value={option.text}
                              >
                                {option.text}
                              </SelectItem>
                            ))
                          : null}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              );
            }

            if (formItem.type === "input") {
              return (
                <div
                  key={`survey-form-item-${formItem.id}`}
                  className="flex flex-col justify-start mb-10 w-full"
                >
                  <Label className="mb-4">{formItem.label}</Label>
                  <Input
                    value={responses[formItem.id].answer}
                    placeholder="Ingrese su respuesta"
                    className="w-full"
                    type={formItem.format}
                    onChange={(e) => handleChange(formItem.id, e.target.value)}
                  />
                </div>
              );
            }
          })
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
              <Button className="flex-none" onClick={submitSurvey}>
                Aceptar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
