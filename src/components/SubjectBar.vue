<template>
  <div id="subject-bar-container">
    <div class="subject"
         @click="setSubject(subject)"
         :class="{active: currentSubject === subject}"
         v-for="subject of subjects">
      {{subject.label}}
    </div>
  </div>
</template>

<script>
export default {
  name: "SubjectBar",
  props: ['subjects'],
  data() {
    return {
      currentSubject: null,
    }
  },
  methods: {
    setSubject(subject) {
      if (subject === this.currentSubject) subject = null
      this.currentSubject = subject
      this.$emit('subject-updated', this.currentSubject)
    }
  }
};
</script>

<style scoped>
#subject-bar-container {
  width: 24%;
  height: 300px;
  margin: 30px 0;
  background-color: #383838;
  border-radius: 20px;
  overflow: auto;
}

.subject {
  margin: 24px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #212121;
  transition: opacity 1s;
  cursor: pointer;
}

.subject.active {
  text-decoration: underline;
}

.subject:hover {
  opacity: .6;
}
</style>