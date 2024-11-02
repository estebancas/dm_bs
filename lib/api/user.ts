import { User } from "@/store/user";
import HttpService from "./http";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const apiService = new HttpService(baseUrl);

export const login = async (user: { name: string; email: string }) => {
  try {
    const response = await apiService.post<
      User,
      { name: string; email: string }
    >("users/login", user);
    return response;
  } catch (error) {
    console.log("login error", error);
    return null;
  }
};

export const register = async (user: { name: string; email: string }) => {
  try {
    const response = await apiService.post<
      User,
      { name: string; email: string }
    >("users", user);
    return response;
  } catch (error) {
    console.log("login error", error);
    return null;
  }
};

export const updateComment = async (comment: string) => {
  try {
    const response = await apiService.put<User, { comment: string }>("users", {
      comment,
    });
    return response;
  } catch (error) {
    console.log("updateComment error", error);
    return null;
  }
};

export const updateSurvey = async (survey: object) => {
  try {
    const response = await apiService.put("users", { survey });

    return response
  } catch (error) {
    console.log("updateSurvey error", error);

    return null;
  }
}
