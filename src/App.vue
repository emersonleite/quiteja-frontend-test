<template>
  <v-app>
    <v-app-bar clipped-left>
      <div class="d-flex align-center w-100 px-5">
        <img alt="logo" height="70" :src="require('./assets/logo.png')" />
        <div class="text-subtitle-2 pl-3">
          Teste de
          <span>
            <a
              style="color: #1b5f6b"
              class="text-decoration-none"
              href="https://github.com/emersonleite/quiteja-frontend-test"
              target="_blank"
              rel="noopener noreferrer"
              >Emerson Leite</a
            ></span
          >
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      clipped
      fixed
      app
      theme="mainTheme"
      mobile-breakpoint="xs"
      color="primary"
      class="white--text"
      width="284"
      style="position: fixed"
    >
      <v-list>
        <v-list-item>
          <template #title>
            <router-link
              class="text-decoration-none text-h6 color-white"
              :to="{ name: 'users' }"
            >
              <span style="color: aliceblue">Usuários</span>
            </router-link>
          </template>
          <template #prepend><v-icon>mdi-account-outline</v-icon></template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
