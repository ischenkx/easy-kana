<template>
  <div id="card-container">
    <div class="symbol">{{knownSymbol}}</div>
    <div class="symbol">{{shown ? hiddenSymbol : ''}}</div>
  </div>
</template>

<script>
export default {
  name: "SymbolCard",
  props: ['knownSymbol', 'hiddenSymbol', 'shown'],
};
</script>

<style scoped>
#card-container {
  height: 70%;
  width: 100px;
  margin: 20px;
  background-color: #212121;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.symbol {
  height: 35%;
  width: 35px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #383838;
}
</style>