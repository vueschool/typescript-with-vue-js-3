<script lang="ts">
import formatRelative from "date-fns/formatRelative";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    date: { type: Date, required: true },
  },
  computed: {
    formatted(): string {
      return formatRelative(this.date, Date.now());
    },
  },
  mounted() {
    this.$http("https://myendpoint.com");
  },
});
</script>
<template>
  <div>{{ formatted }}</div>
</template>
