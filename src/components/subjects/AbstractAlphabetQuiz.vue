<template>
  <div id="quiz-container">
    <div id="quiz-header">
      <span v-if="inverted">{{primary}} to {{secondary}}</span>
      <span v-else>{{secondary}} to {{primary}}</span>
      <span id="quiz-header-swap-btn" @click="inverted=!inverted; generate()">Swap!</span>
    </div>
    <div id="quiz-display">
      <div id="quiz-display-controls-panel">
        <span class="control-btn" @click="generate(); shown=false">
          New
        </span>
        <span class="control-btn" @click="shown=!shown">
          Check
        </span>
      </div>

      <div id="quiz-display-task">
        <div id="cards-row">
          <SymbolCard
            :hiddenSymbol="hidden"
            :knownSymbol="known"
            :shown="shown"
            v-for="[known, hidden] of currentTask"></SymbolCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SymbolCard from "@/components/subjects/SymbolCard.vue";

function rand(from, to) {
  return from + Math.floor(Math.random() * (to - from))
}

export default {
  name: "AbstractAlphabetQuiz",
  components: {SymbolCard},

  props: ['dictionary', 'primary', 'secondary'],
  data() {
    return {
      inverted: false,
      shown: false,
      currentTask: [ ['a', 'b'] ]
    }
  },
  methods: {
    generate() {
      let length = rand(1, 5)
      let entries = Object.entries(this.dictionary)
      let task = []

      for (let i = 0; i < length; i++) {
        let entry = entries[rand(0, entries.length)]
        if (this.inverted) {
          entry = [...entry]
          entry.reverse()
        }
        task.push(entry)
      }

      this.currentTask = task
    }
  }
};
</script>

<style scoped>

#quiz-display-task {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

#cards-row {
  margin-top: 20px;
  width: 100%;
  height: 40%;
  background-color: #383838;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.control-btn {
  padding: 10px 20px;
  background-color: #383838;
  border-radius: 5px;
  margin-right: 20px;
  transition: opacity 1s;
  cursor: pointer;
}

.control-btn:hover {
  opacity: 0.6;
}

#quiz-display-controls-panel {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
}

#quiz-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

}

#quiz-header {
  width: 100%;
  font-size: 26px;
}

#quiz-header-swap-btn {
  padding: 15px;
  border-radius: 8px;
  margin-left: 30px;
  cursor: pointer;
}

#quiz-header-swap-btn:hover {
  text-decoration: underline;
}

#quiz-display {
  flex-grow: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

</style>