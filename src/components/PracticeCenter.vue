<template>
  <div>
    <h1>
      Practice center
    </h1>
    <h4>
      Subject: {{subject || 'not chosen'}}
    </h4>
    <SubjectBar :subjects="['Hiragana', 'Katakana']"/>
  </div>
</template>

<script>
import SubjectBar from "@/components/SubjectBar.vue";
export default {
  name: "PracticeCenter",
  components: {  SubjectBar},
  data() {
    return {
      // subject: this.$route.params['subject']
    }
  },

  computed: {
    subject: {
      get() {
        return this.$route.params['subject']
      }
    }
  }
};
</script>

<style scoped>

</style>