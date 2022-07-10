<template>
  <div class="subject" v-for="subject of subjects">
    {{subject}}
  </div>
</template>

<script>
export default {
  name: "SubjectBar",
  props: ['subjects']
};
</script>

<style scoped>

</style>