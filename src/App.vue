<template>
  <div id="app">
    <Search>
        <p>Enter the coordinate, in the format of "39.993169" (without parentheses), the current possition is {{position}}.</p>
        <input type="text" placeholder="enter the x-coordinate" v-model="Keyword1">
      <input type="text" placeholder="enter the y-coordinate" v-model="Keyword2">
      <button v-on:click="vuefunction(Keyword1,Keyword2)">search</button>
    </Search>
    <Dataa></Dataa>
    <amap :zoom="15" :center="position">
      <amap-marker
          :position="position"
          :label="{
          content: 'Hello, AMap-Vue!',
          direction: 'bottom',
        }"
          draggable
      />
    </amap>
    <aplayer autoplay :music="{
        title: '情非得已',
        author: '庚澄庆',
        url: 'https://www.kugou.com/song/#hash=7A38DFB37ABF8E177E80C837C5F53DFE&album_id=4050516',
         pic: 'https://oss.tan8.com/violin/89/44668/44668_prev.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
    }">
    </aplayer>
  </div>
</template>

<script>
import Dataa from "@/components/Dataa";
import Aplayer from 'vue-aplayer'
export default {
  name: "App",
  data() {
    return {
      position: [116.473179, 39.993169]
    };
  },
  components: {Aplayer, Dataa}, // 注册
  methods: {
    vuefunction: function (msg,msg2) {
      this.position = [msg,msg2]
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>

<style lang="less" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 80%;
}
</style>
