<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/databinding">Data Binding</router-link>
    |
    <router-link to="/event">Event</router-link>
    |
    <router-link to="/computed&watch">computed & watch</router-link>
    |
    <router-link to="/component">Component</router-link>
    |
    <router-link to="/slot">ModalLayout With Slot</router-link>
    |\
    <router-link to="/provideInject">ProvideInject</router-link>
    |
    <router-link to="/calculator">Calculator</router-link>
    |
    <router-link to="/mixin">Mixin</router-link>
    |
    <router-link to="/customDirective">CustomDirective</router-link>
    |
    <router-link to="/kakaoLogin">KakaoLogin</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
