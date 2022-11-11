<template>
  <div style="display: flex">
    <div class="block text-center carousel">
      <!-- <span class="demonstration"
      >Switch when indicator is hovered (default)</span
    > -->
      <Icon type="ios-alert-outline" class="IconSize" size="20" />
      <span>今日公告</span>
      <el-carousel height="400px" style="border-radius: 10px; margin-left: 60px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <Card style="width: 60%; margin-left: 80px; margin-top: 30px">
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
            <a :href="item.url" target="_blank">1.《{{ item.name }}》</a>
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
      movieList: [
        {
          name: 'The Shawshank Redemption',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: 'Leon:The Professional',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: 'Farewell to My Concubine',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: 'Forrest Gump',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: 'Life Is Beautiful',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: 'Spirited Away',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: "Schindler's List",
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: 'The Legend of 1900',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: 'WALL·E',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        },
        {
          name: 'Inception',
          url: 'https://movie.douban.com/subject/3541415/',
          rate: 9.2
        }
      ],
      randomMovieList: [],
    }
  },
  methods: {
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
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
  background-image: url(../../../assets/picture/xsk.jpg);
background-size: 100%;
background-repeat: no-repeat;


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
}
.rate-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
