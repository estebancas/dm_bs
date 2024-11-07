import React from "react";

import { CircleUserRound, Settings, LogOut } from "lucide-react";
import { useAppSelector } from "@/hooks/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import TextMarkdown from "./text-markdown";
import { updateComment } from "@/lib/api/user";
import { logout, setUserComment } from "@/store/user";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.userData);
  const [editMode, setEditMode] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [updatedComment, setUpdatedComment] = React.useState("");
  const router = useRouter();

  const onCommentSubmit = async () => {
    setLoading(true);
    setEditMode(false);

    if (updatedComment) {
      const response = await updateComment(updatedComment);

      if (response.data) {
        toast.success("Comentario actualizado");
        dispatch(setUserComment(updatedComment));
      } else {
        console.error(response.error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="absolute top-[-30px] right-0">
            <Settings />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <ul className="flex flex-col">
            <li>
              <Button
                variant="ghost"
                onClick={() => {
                  dispatch(logout());
                  router.replace("login");
                }}
              >
                <LogOut /> Cerrar sesión
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>

      <div className="flex flex-row items-center justify-start w-full mb-8">
        <CircleUserRound className="text-primary" size={100} />
        <div className="ml-4">
          <h2 className="text-3xl font-bold">
            {user?.name ? capitalizeFirstLetter(user.name) : "Usuario"}
          </h2>
          {user?.email ? <label className="">{user.email}</label> : null}
        </div>
      </div>

      <div className="w-full text-left">
        <h2>Tu comentario para los futuros padres</h2>
      </div>
      <Card className="my-4">
        <CardContent className="pt-6">
          {user?.comment && !editMode ? (
            <div dangerouslySetInnerHTML={{ __html: user?.comment }} />
          ) : (
            <TextMarkdown
              noMarginTop
              defaultValue={user?.comment}
              onChange={(text) => setUpdatedComment(text)}
            />
          )}
        </CardContent>
        {user?.comment && editMode ? (
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setEditMode(false)}>
              Cancelar
            </Button>
            <Button disabled={loading} onClick={onCommentSubmit}>
              Guardar
            </Button>
          </CardFooter>
        ) : null}
        {user?.comment && !editMode ? (
          <CardFooter className="flex justify-end">
            <Button onClick={() => setEditMode(true)}>Editar</Button>
          </CardFooter>
        ) : null}
        {!user?.comment && !editMode ? (
          <CardFooter className="flex justify-end">
            <Button disabled={loading} onClick={onCommentSubmit}>
              Listo
            </Button>
          </CardFooter>
        ) : null}
      </Card>
    </div>
  );
}
