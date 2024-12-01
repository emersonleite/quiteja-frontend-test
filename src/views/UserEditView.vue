<template>
  <v-container max-width="600px">
    <v-row>
      <v-col>
        <div class="d-flex justify-center">
          <v-btn variant="flat" color="primary" @click="router.go(-1)">
            Voltar para usuários
          </v-btn>
        </div>

        <h4 class="text-h4 text-center mt-10 mb-10">Editar usuário</h4>

        <PageLoader
          v-if="loadingOnFetchUserById"
          :loading="loadingOnFetchUserById"
          height="576px"
          type="article"
        />

        <v-form
          v-if="user && !loadingOnFetchUserById"
          @submit.prevent="updateUser"
        >
          <v-text-field
            v-model="user.firstName"
            label="Nome"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.lastName"
            label="Sobrenome"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.phone"
            label="Telefone"
            required
          ></v-text-field>

          <v-btn color="primary" type="submit" :loading="loadingOnUpdateUser"
            >Salvar</v-btn
          >
        </v-form>

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
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../services/repository";
import PageLoader from "@/components/PageLoader.vue";
import { useSharedData } from "@/shared/data";

const { user, toast, showToast, loadingOnFetchUserById, getUserById } =
  useSharedData();

const loadingOnUpdateUser = ref<boolean>(false);

const route = useRoute();
const router = useRouter();
const userId = route.params.id as string;

onMounted(async () => {
  await getUserById(userId);
});

async function updateUser() {
  loadingOnUpdateUser.value = true;
  try {
    await api.user.updateUser(userId, user.value!);

    showToast("Usuário atualizado com sucesso!", "success");

    router.go(-1);
  } catch (error) {
    showToast("Erro ao salvar as alterações.", "error");
  } finally {
    loadingOnUpdateUser.value = false;
  }
}
</script>
