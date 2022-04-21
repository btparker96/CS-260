<!--To understand this code, read the comments starting with index.js and enduing with main.js, App.vue, and index.html-->

<template>
  <div id="app">
    <div class="header">
      <h1>Ticket System</h1>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/create">New Ticket</router-link> |
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<!--original template
<template>
  <div id="app">
    <div id="nav">
      //These are vue cli's <a> tags. It think the to= can either reference the path or the name defined in index.js
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> //This tells where to place the page the router-link returns
  </div>
</template>
-->

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #571845;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #FFC300;
}

.content {
  padding: 10px 100px;
}
</style>