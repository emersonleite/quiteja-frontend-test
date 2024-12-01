import { ref } from "vue";
import { UserByIdResponse } from "@/types/user";
import { useRouter } from "vue-router";
import api from "../services/repository";

const user = ref<UserByIdResponse | null>(null);

const loadingOnFetchUserById = ref<boolean>(false);

const router = useRouter();

const toast = ref({
  visible: false,
  message: "",
  color: "success",
});

function showToast(message: string, color: string) {
  toast.value.message = message;
  toast.value.color = color;
  toast.value.visible = true;
}

async function getUserById(id: string) {
  loadingOnFetchUserById.value = true;
  try {
    user.value = await api.user.getUserById(id);
  } catch (error) {
    console.error("Não foi possível carregar os dados do usuário!", error);
    router.push("/user");
  } finally {
    loadingOnFetchUserById.value = false;
  }
}

export function useSharedData() {
  return { user, toast, loadingOnFetchUserById, showToast, getUserById };
}
