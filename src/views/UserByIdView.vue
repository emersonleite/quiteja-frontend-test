<template>
  <v-container max-width="600px">
    <v-row>
      <v-col>
        <div class="d-flex justify-center">
          <v-btn variant="flat" color="primary" @click="router.go(-1)">
            Voltar para usuários
          </v-btn>
        </div>

        <h4 class="text-h4 text-center mt-10 mb-10">Detalhe do usuário</h4>

        <PageLoader
          v-if="loadingOnFetchUserById"
          :loading="loadingOnFetchUserById"
          height="576px"
          maxWidth="500px"
          type="card"
        />

        <v-card
          v-if="user && !loadingOnFetchUserById"
          class="mx-auto my-5"
          max-width="500"
        >
          <v-img
            :src="user.picture"
            max-height="350"
            :alt="`${user.firstName} ${user.lastName}`"
            aspect-ratio="1"
            class="mb-4"
          ></v-img>
          <v-card-title>
            {{ mapTitle(user.title) }} {{ user.firstName }} {{ user.lastName }}
          </v-card-title>
          <v-card-subtitle>{{ user.email }}</v-card-subtitle>
          <v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-title><strong>Sexo:</strong></v-list-item-title>
                <v-list-item-subtitle>{{ user.gender }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><strong>Data de nascimento:</strong></v-list-item-title
                >
                <v-list-item-subtitle>
                  {{ new Date(user.dateOfBirth).toLocaleDateString() }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><strong>Telefone:</strong></v-list-item-title
                >
                <v-list-item-subtitle>{{ user.phone }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><strong>Endereço:</strong></v-list-item-title
                >
                <v-list-item-subtitle v-if="user.location">
                  {{ user.location.street }}, {{ user.location.city }},
                  {{ user.location.state }}, {{ user.location.country }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><strong>Timezone:</strong></v-list-item-title
                >
                <v-list-item-subtitle v-if="user.location">{{
                  user.location.timezone
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mapTitle } from "@/utils";
import PageLoader from "@/components/PageLoader.vue";
import { useSharedData } from "../shared/data";

const route = useRoute();

const router = useRouter();

const userId = route.params.id as string;
const { user, loadingOnFetchUserById, getUserById } = useSharedData();

onMounted(async () => {
  getUserById(userId);
});
</script>
