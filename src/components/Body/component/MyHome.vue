<template>
  <div class="box">
    <h4>书本分类</h4>
    <div>
      <div class="btn">
        <button v-for="item in classifyFir" @click="goToDetail(item)">{{item}}</button>
      </div>
      <div class="btn">
        <button v-for="item in classifySec" @click="goToDetail(item)">{{item}}</button>
      </div>
      <div class="more">
        <button @click="moreBook('更多')">更多</button>
      </div>
    </div>
  </div>
  <div class="rec">
    <div class="block text-center carousel">
      <!-- <span class="demonstration"
      >Switch when indicator is hovered (default)</span
    > -->
      <Icon type="ios-alert-outline" class="IconSize" size="20" />
      <span>今日公告</span>
      <el-carousel height="400px" style="border-radius: 10px; margin-left: 60px">
        <el-carousel-item v-for="item in pic_item" :key="item">
          <!-- <h4>{{item}}</h4> -->
          <img :src="item">
          <!-- <img src="../../assets/picture/11.jpg"> -->
        </el-carousel-item>
      </el-carousel>
    </div>

    <Card style="width: 55%; margin-left: 80px; margin-top: 3.5%; margin-bottom: 3%; background-color:lightblue;">
      <template #title>
        <Icon type="ios-film-outline"></Icon>
        热门图书
      </template>
      <template #extra>
        <!-- <a href="#" @click.prevent="changeLimit"> -->
        <Icon type="ios-loop-strong"></Icon>
        评分
        <!-- </a> -->
      </template>
      <p class="rate-demo" v-for="item in randomMovieList">
        <a :href="item.url" target="_blank">《{{ item.name }}》</a>
        <span> <Rate disabled v-model="item.rate" />{{ item.rate }} </span>
        <!-- <a :href="item.url" target="_blank">《{{ item.name }}》</a>
        <span> <Rate disabled v-model="item.rate" />{{ item.rate }} </span> -->
      </p>
    </Card>
  </div>
</template>

<script>

export default {
  name: 'myHome',
  carouselvalue: 0,
  data() {
    return {
      pic_item: ['/src/assets/picture/xsk.jpg', '/src/assets/picture/mlrs.jpg','/src/assets/picture/bwbj.jpg','/src/assets/picture/hsgqs.jpg'],
      classifyFir: ['情感','时尚','饮食','影视','自然','理财','萌宠','小说','艺术','音乐','科技','人文'],
      classifySec : ['情感','时尚','饮食','影视','自然','理财','萌宠','小说','艺术','音乐','科技','人文'],
      movieList: [
        {
          name: '肖申克的救赎',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: '这个杀手不太冷',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: '霸王别姬',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: '阿甘正传',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: '美丽人生',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: '千与千寻',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: "辛德勒名单",
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: '海上钢琴师',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: '机器人总动员',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        },
        {
          name: '盗梦空间',
          url: 'https://movie.douban.com/subject/3541415/',
          rate: 9.2
        }
      ],
      randomMovieList: []
    }
  },
  methods: {
    goToDetail(val) {
      // bus.emit('shareBookType',val)
      this.$router.push({name: 'moreBook',params:{msg: val, scroll: true}})
    },
    moreBook(val) {
      // this.$router.push('/morebook')
      if(val == '更多') {
        val = '科技'
      }
      this.$router.push({name: 'moreBook',params:{msg: val, scroll: false}})
    },
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = []
        for (let index in arr) {
          temp_array.push(arr[index])
        }
        const return_array = []
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length)
            return_array[i] = temp_array[arrIndex]
            temp_array.splice(arrIndex, 1)
          } else {
            break
          }
        }
        return return_array
      }
      this.randomMovieList = getArrayItems(this.movieList, 5)
    }
  },
  mounted() {
    this.changeLimit()
  }
}
</script>

<style lang="less" scoped>
.btn{
  margin-left: 1%;
  margin-top: 1%;
  width: 100%;
}
.more button:hover{
  background-color: #949494;
  color: #e6e6e6;
}

.more{
  margin-left:105%;
  margin-top: -6.2%;
  height:75%;
  width:10%;
}
.more button{
  cursor: pointer;
  margin-left: -10%;
  height: 100%;
  width: 80px;
  border: none;
  background-color: #F6F7F8;
  color: #61666D;
  border-radius: 5px;
  font-size: 20px;
}

.box{
  display: flex;
  margin-top: -1.45%;
  margin-bottom: 4%;
  background-color:#d3dce6
}
.box h4{
  margin-left: 2%;
  margin-bottom: 2.4%;
  padding-top: 30px;
  font-size: 20px;
}
.btn button{
  cursor: pointer;
  margin-left: 16px;
  height: 30px;
  width: 80px;
  border: none;
  background-color: #F6F7F8;
  color: #61666D;
  border-radius: 5px;
}
.btn button:hover{
  background-color: #949494;
  color: #e6e6e6;
}
.rec{
  display: flex;
  background-color:#e6e6e6;
  margin-top:-4%;
  height:500px;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel {
  width: 500px;
  margin-top: 0;
}
.IconSize {
  height: 30px;
  width: 30px;
  margin-left: 210px;
  margin-top: 5%;
}
.rate-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
