import { User } from "@/store/user";
import HttpService from "./http";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const apiService = new HttpService(baseUrl);

export const login = async <T>(user: { name: string; email: string }) => {
  try {
    const response = await apiService.post<
      User,
      { name: string; email: string }
    >("users/login", user);
    return { data: response as T };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { error: error?.data?.error };
  }
};

export const register = async (user: { name: string; email: string }) => {
  try {
    const response = await apiService.post<
      User,
      { name: string; email: string }
    >("users", user);
    return { data: response };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { error: error?.data?.error };
  }
};

export const updateComment = async (comment: string) => {
  try {
    const response = await apiService.put<User, { comment: string }>("users", {
      comment,
    });
    return { data: response };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { error: error?.data?.error };
  }
};

export const updateSurvey = async (survey: object) => {
  try {
    const response = await apiService.put("users", { survey });

    return { data: response };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { error: error?.data?.error };
  }
};
