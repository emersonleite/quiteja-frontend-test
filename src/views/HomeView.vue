<template>
  <v-container height="100%">
    <v-row style="height: calc(100% - 64px)" align="center">
      <v-col class="text-center">
        <p class="text-h5">
          Para verificar o teste acesse
          <span
            ><router-link class="text-decoration-none" :to="{ name: 'users' }">
              <span style="color: #1b5f6b">Usuários</span>
            </router-link></span
          >
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>
