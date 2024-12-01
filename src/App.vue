<template>
  <v-app>
    <v-app-bar clipped-left>
      <div class="w-100 px-5">
        <img alt="logo" height="70" :src="require('./assets/logo.png')" />
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
