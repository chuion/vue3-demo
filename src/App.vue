<template>
  <aile-input v-model="value" />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value: "123",
      list: ["aaa", "bbb", "ccc"],
    };
  },
  methods: {
    handleClick(e) {
     console.log('>>> click: ', e)
    //  e.preventDefault()
    //  return false
    }
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
