<template>
<div class="hello" :class="{ active: isActive,'nactive': nActive}" :style= "{background-image: 'url('+imgs+')'} ">
<!-- :class="{ active: isActive,'nactive': nActive}" :style= "{background: 'url('+imgs+')'}" -->
  <el-container>
    <el-header>
      <ul class="ulBasic">
        <li>图片</li>
        <li>视频</li>
        <li>题库</li> 
        <li>sql练习</li>
      </ul>
    </el-header>
    <el-main>
      <span @click="tabImg" class="processImg"></span>
      <span @click="tabImg" class="backImg"></span>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      index: 0,
      isActive: true,
      nActive: false,
      imgs: '',
      imgs2: ['../assets/bacimg/backgroud.jpg','../assets/bacimg/backgroud1.jpg','../assets/bacimg/backgroud2.jpg']
    };
  },
  create() {
  },  
  mounted() {
    this.imgs = this.imgs2[0];
    console.log(this.imgs)
  },
  methods: {
    tabImg() {
      this.index = this.index + 1;
      this.imgs = this.imgs2[index];
      isActive = !isActive;
      nActive = !nActive;
    }
  }
}
</script>

<style>
  .hello {
    background-image: url(../assets/bacimg/backgroud.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    width: 100%;
    position: fixed;
  }
  ul li {
    font-size: 18px;
    color: #ffffffd1;
    display: inline-block;
    float: left;
  }
  .el-container{
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #e9eef300;
    line-height: 60px;
  }
  .el-main {
    background-color: #e9eef300;
    color: #333;
    line-height: 160px;
    padding: 0;
  }
  .ulBasic {
    list-style: none;
  }
  .ulBasic li {
    margin-left: 10px;
    cursor:pointer;
  }
  .ulBasic li:hover {
    color: blue;
  }
  .processImg,.backImg {
    width: 40px;
    height: 40px;
    background: url("../assets/img/forward.png") no-repeat;
    background-size: cover;
    position: absolute;
    right: 7%;
    bottom: 7%;
    font-size: 35px;
    cursor:pointer;
  }
  .backImg {
    background: url("../assets/img/back.png") no-repeat;
    right: 11%; 
    background-size: cover;
    cursor:pointer;
  }
  .active {
    opacity: 1;
    color: red;
    transition: all 0.5s;
  }
  .nActive {
    opacity: 0;
    color: red;
    transition: all 0.5s;
  }
</style>

