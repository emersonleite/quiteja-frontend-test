import { AxiosInstance } from "axios";
import { UserByIdResponse, UserData } from "@/types/user";

type RequestParams = { page: number; limit: number };

export default ($api: AxiosInstance) => ({
  async getAllUsers(params: RequestParams): Promise<UserData> {
    const response = await $api.get<UserData>("/user", { params });
    return response.data;
  },

  async getUserById(id: string): Promise<UserByIdResponse> {
    const response = await $api.get<UserByIdResponse>(`/user/${id}`);
    return response.data;
  },

  async removeUser(id: string): Promise<void> {
    await $api.delete(`/user/${id}`);
  },
});
