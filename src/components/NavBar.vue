<template>
  <nav id="nav-bar">
    <router-link to="/" class="nav-bar-link">
      Home
    </router-link>
    <router-link to="/practice-center/" class="nav-bar-link">
      Practice Center
    </router-link>
  </nav>
</template>

<script>
export default { name: "NavBar" };
</script>

<style scoped>

#nav-bar {
  display: flex;
  justify-content: left;
  align-items: center;
}

.nav-bar-link {
  font-size: 3em;
  padding: 10px 30px;
  outline: none;
  text-decoration: none;
}

.nav-bar-link:hover {
  text-decoration: underline;
}
</style>