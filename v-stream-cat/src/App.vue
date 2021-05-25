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
    --clr-purple:       #a970ff;
    --clr-dark:         #111;
    --clr-light:        #222;
    --clr-lighter:      #333;

    --clr-txt-primary:  whitesmoke;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    font-family: "Roobert", Arial, Helvetica, sans-serif;
    color: var(--clr-txt-primary);
  }

  a {
    color: var(--clr-txt-primary);
  }
    a:hover {
      color: var(--clr-purple);
    }
  
  .active {
    border-bottom: 1px solid var(--clr-purple);
    color: var(--clr-purple);
    padding-bottom: 10px;
  }

  .btn {
    padding: 10px;
    color: var(--clr-txt-primary);
    background-color: var(--clr-lighter);
    border: 0;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
