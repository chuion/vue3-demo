<template>
  <aile-select
    v-model="value"
    :config="{
      data: list,
    }"
  />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value: "",
      list: ["aaa", "bbb", "ccc"],
    };
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
