<template>
  <v-container max-width="85%">
    <v-row>
      <v-col>
        <h4 class="text-h4 text-center mt-10 mb-10">Lista de usuários</h4>

        <PageLoader
          v-if="loadingOnFetch"
          :loading="loadingOnFetch"
          height="576px"
          type="table"
        />

        <v-table fixed-header v-else>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Título</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th class="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>
                <v-avatar :image="user.picture" size="40"></v-avatar>
              </td>
              <td>
                <p>{{ mapTitle(user.title) || user.title }}</p>
              </td>
              <td>
                <router-link
                  style="color: #1b5f6b"
                  class="text-decoration-none text-subtitle-2"
                  :to="{ name: 'userById', params: { id: user.id } }"
                >
                  {{ user.firstName }}
                </router-link>
              </td>
              <td>
                <p>{{ user.lastName }}</p>
              </td>
              <td class="text-center">
                <v-icon
                  class="me-2"
                  color="primary"
                  @click="editUser(user.id)"
                  title="Editar Usuário"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  color="primary"
                  @click="removeUser(user.id)"
                  title="Remover Usuário"
                >
                  mdi-delete
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>

        <v-pagination v-model="page" :length="paginationLength"></v-pagination>

        <v-snackbar
          v-model="toast.visible"
          :timeout="3000"
          :color="toast.color"
        >
          {{ toast.message }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import api from "../services/repository";
import { User } from "@/types/user";
import { mapTitle } from "@/utils";
import { useRouter, useRoute } from "vue-router";
import PageLoader from "@/components/PageLoader.vue";
import { useCacheStore } from "../store/cache";
import { useSharedData } from "@/shared/data";

const { toast, showToast } = useSharedData();

const users = ref<User[]>([]);

const total = ref<number>(1);

const loadingOnFetch = ref<boolean>(false);

const router = useRouter();

const route = useRoute();

const useCache = useCacheStore();

const page = computed({
  get: () => {
    const queryPage = route.query.page;
    return queryPage ? parseInt(queryPage as string, 10) : 1;
  },
  set: (newPage) => {
    router.replace({
      name: "users",
      query: { ...route.query, page: newPage.toString() },
    });
  },
});

const timeoutHasBeenReached = computed(() => {
  return (
    new Date().getTime() - useCache.time > process.env.VUE_APP_CACHE_TIME_LIMIT
  );
});

onMounted(async () => {
  if (timeoutHasBeenReached.value) {
    await getAllUsers();
    return;
  }
  users.value = useCache.users;
  total.value = useCache.totalItems;
});

watch(page, () => {
  getAllUsers();
});

const paginationLength = computed(() => {
  return Math.floor(total.value / limit.value);
});

const limit = ref<number>(10);

async function getAllUsers() {
  loadingOnFetch.value = true;
  try {
    const { data, total: totalItems } = await api.user.getAllUsers({
      page: page.value,
      limit: limit.value,
    });

    users.value = data;
    total.value = totalItems;

    useCache.setUsers(data);
    useCache.setTime(new Date().getTime());
    useCache.setTotalItems(totalItems);
  } catch (error) {
    console.error("Não foi possível obter a lista de usuários.", error);
  } finally {
    loadingOnFetch.value = false;
  }
}

function editUser(userId: string) {
  router.push({ name: "editUser", params: { id: userId } });
}

async function removeUser(userId: string) {
  const confirmation = confirm("Tem certeza que deseja remover este usuário?");
  if (!confirmation) return;

  try {
    await api.user.removeUser(userId);

    users.value = users.value.filter((user) => user.id !== userId);

    showToast("Usuário removido com sucesso!", "success");
  } catch (error) {
    console.error("Erro ao remover o usuário.", error);
    showToast("Não foi possível remover o usuário. Tente novamente.", "error");
  }
}
</script>
