<template>
  <header class="header">
    <div class="menu">
      <div class="menu-logo-box">
        <img src="" alt="" class="menu-logo-img">
      </div>
    </div>
    <div class="search">
      <input type="text" class="search-input">
      <button class="search-button"></button>
    </div>
    <div class="user">
      <i class="user-crown"></i>
      <i class="user-notifications"></i>
      <i class="user-msgs"></i>
      <button class="user-get-bits-btn">Get Bits</button>
      <div class="user-profile-img"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    background-color: #333;
  }
</style>