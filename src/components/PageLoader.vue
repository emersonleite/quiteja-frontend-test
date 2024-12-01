<template>
  <v-skeleton-loader
    v-if="props.loading"
    :height="props.height"
    :type="props.type"
    :max-width="props.maxWidth && props.maxWidth"
  ></v-skeleton-loader>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  maxWidth: {
    type: String,
    required: false,
  },
});
</script>
