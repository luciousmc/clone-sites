<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    font-family: "Roobert", Arial, Helvetica, sans-serif;
  }

  a {
    color: whitesmoke;
  }

  a:hover {
    color: #a970ff;
  }

  .btn {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: lightgray;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
  }
</style>
