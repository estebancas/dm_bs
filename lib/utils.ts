import { RootState } from "@/types/store";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loadState = (): Partial<RootState> | undefined => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};
