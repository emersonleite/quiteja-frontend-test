import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "@/types/user";

export const useCacheStore = defineStore("cache", () => {
  const time = ref<number>(0);

  const users = ref<User[]>([]);

  function setTime(newTime: number) {
    time.value = newTime;
  }

  function setUsers(usersList: User[]) {
    users.value = usersList;
  }

  return {
    time,
    users,
    setTime,
    setUsers,
  };
});
