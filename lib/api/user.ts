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
    return error;
  }
};

export const updateComment = async (comment: string) => {
  try {
    const response = await apiService.put<User, string>("users/login", comment);
    return response;
  } catch (error) {
    return error;
  }
};
