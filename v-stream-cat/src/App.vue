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
  :root {
    --clr-purple:   #a970ff;
    --clr-dark:     #111;
    --clr-light:    #222;
    --clr-lighter:  #333;
  }


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
      color: var(--clr-purple);
    }
  
  .active {
    border-bottom: 1px solid #a970ff;
    color: #a970ff;
    padding-bottom: 10px;
  }

  .btn {
    padding: 10px;
    color: whitesmoke;
    background-color: #333;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
