<template>
  <div id="pc-container">
    <div id="pc-header">
      <span>Practice Center</span>
    </div>
    <div id="pc">
      <SubjectBar :subjects="subjects" @subject-updated="updateSubject"/>
      <div id="pc-bench">
        <keep-alive>
          <component :is="currentBenchComponent" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>

import {markRaw} from "vue";

import SubjectBar from "@/components/SubjectBar.vue";
import HiraganaQuiz from "@/components/subjects/HiraganaQuiz.vue";
import KatakanaQuiz from "@/components/subjects/KatakanaQuiz.vue";

export default {
  name: "PracticeCenter",
  components: {
    SubjectBar,
    HiraganaQuiz,
    KatakanaQuiz
  },
  data() {
    return {
      currentBenchComponent: null,
      subjects: [
        {
          label: 'Hiragana',
          component: markRaw(HiraganaQuiz),
        },
        {
          label: 'Katakana',
          component: markRaw(KatakanaQuiz),
        },
      ]
    }
  },

  methods: {
    updateSubject(subject) {
      this.currentBenchComponent = subject?.component
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
#pc-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
}

#pc-header {
  width: 100%;
  font-size: 26px;
}

#pc {
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

#pc-bench {
  margin: 30px 0;
  flex-grow: 1;
  display: flex;
}
</style>