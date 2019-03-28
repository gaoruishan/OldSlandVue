<template>
  <!--添加'占位'div,为了防止父组件样式'污染'-->
  <div>
    <div class="container">
      <button @click="doPlay">点击</button>
      <button @click="doPlay2">点击2</button>
      <img v-show="playing" class="play-rotate" src='../../assets/images/my/study.png'/>
      <img v-show="!playing" class="image" src='../../assets/images/my/study.png'/>
      <img v-show="playing2" class="go" src='../../assets/images/my/study.png'/>
      <img v-show="!playing2" class="image" src='../../assets/images/my/study.png'/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RotateAnim",
    props: {},
    components: {},
    data() {
      return {
        playing: false,
        playing2: false,
      }
    },
    methods: {
      doPlay() {
        this.playing = !this.playing;
      },
      doPlay2() {
        this.playing2 = !this.playing2;
      }
    },
    mounted() {
    }
  }
</script>

<style lang="stylus" scoped>
  /*无限旋转动画*/

  .go {
    width: 420 * 0.01rem;
    height: 420 * 0.01rem;
    margin-top: 35 * 0.01rem;
    border-radius: 50%;
    animation: changDeg 2s linear 0.2s infinite;
  }

  @keyframes changDeg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .play-rotate {
    width: 420 * 0.01rem;
    height: 420 * 0.01rem;
    margin-top: 35 * 0.01rem;
    border-radius: 50%;
    animation: rotate 3s linear 0s infinite;
    -webkit-animation: rotate 3s linear 0s infinite;
    -moz-animation: rotate 3s linear 0s infinite;
    -ms-animation: rotate 3s linear 0s infinite;
    -o-animation: rotate 3s linear 0s infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @-ms-keyframes rotate {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }

  @-o-keyframes rotate {
    from {
      -o-transform: rotate(0deg);
    }
    to {
      -o-transform: rotate(360deg);
    }
  }

  .image {
    width: 420 * 0.01rem;
    height: 420 * 0.01rem;
    margin-top: 35 * 0.01rem;
    border-radius: 50%;
  }

</style>
