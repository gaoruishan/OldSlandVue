<template>
  <div>
    <div class='container'>
      <img v-show="playing" class="play-rotate" :src='image'/>
      <img v-show="!playing" class="image" :src='image'/>
      <img class='play-icon' @click='onPlay' v-show="playing"
           src='../../../assets/images/classic/player@playing.png'/>
      <img class='play-icon' @click='onPlay' v-show="!playing"
           src='../../../assets/images/classic/player@waitting.png'/>
      <img class='img-tag' src='../../../assets/images/classic/music@tag.png'/>
      <span class='txt'>{{content}}</span>
      <audio ref="myaudio">
        <source :src="src" type="audio/mpeg">
      </audio>
    </div>
  </div>
</template>

<script>
  // 导入工具类
  import util from '../../../lib/util'

  export default {
    name: "MusicCmp",
    props: {
      image: String,
      content: String,
      src: String,
      title: String
    },
    data() {
      return {
        playing: false
      }
    },
    methods: {
      onPlay() {
        this.playing = !this.playing;
        // 播放
        if (this.playing) {
          this.$refs.myaudio.play()
        } else {
          this.$refs.myaudio.pause()
        }
      }
    },
    mounted() {
      console.log('classic-music');
      util.checkNet(() => {
        console.log('连接')
      });
      let audio = this.$refs.myaudio;
      // oncanplay浏览器可以播放视频
      audio.oncanplay = () => {
        let totalTime = util.formatTime(audio.duration);
      };
      // 视频播放完毕 用 onended 事件
      audio.onended = () => {
        this.playing = false
      };
    },
    destroyed() {
      util.removeNet();
    }
  }
</script>

<style lang="stylus" scoped>
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

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content center
    align-items: center;
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

  .play-icon {
    width: 120 * 0.01rem;
    height: 120 * 0.01rem;
    /* 相对定位: 以当前元素的中心点,相对于自己位置,距离其他元素的位置 */
    position: relative;
    /* 当前向上偏移 用负数 420/2= 210 + 120/2 =270*/
    top: -270 * 0.01rem;
  }

  .img-tag {
    width: 46 * 0.01rem;
    height: 142 * 0.01rem;
    position: relative;
    top: -120 * 0.01rem;
    left: -260 * 0.01rem;
  }

  .txt {
    display: block;
    font-size: 36 * 0.01rem;
    max-width: 550 * 0.01rem;
    margin-top: -60 * 0.01rem;
  }

</style>
