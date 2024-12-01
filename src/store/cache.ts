import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "@/types/user";

export const useCacheStore = defineStore(
  "cache",
  () => {
    const time = ref<number>(0);

    const users = ref<User[]>([]);

    const totalItems = ref<number>(1);

    function setTime(newTime: number) {
      time.value = newTime;
    }

    function setUsers(usersList: User[]) {
      users.value = usersList;
    }

    function setTotalItems(total: number) {
      totalItems.value = total;
    }

    return {
      time,
      users,
      totalItems,
      setTime,
      setUsers,
      setTotalItems,
    };
  },
  {
    persist: true,
  }
);
