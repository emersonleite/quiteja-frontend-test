import { AxiosInstance } from "axios";
import { UserData } from "@/types/user";

type RequestParams = { page: number; limit: number };

export default ($api: AxiosInstance) => ({
  async getAllUsers(params: RequestParams): Promise<UserData> {
    const response = await $api.get<UserData>("/user", { params });
    return response.data;
  },
});
