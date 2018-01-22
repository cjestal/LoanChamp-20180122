<template>
    <div id="app">
        <!-- 渲染出口 -->
        <div class="full">
            <div class="loader"></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<!--JavaScript-->
<script>
export default {
    name: 'app',
    // created() {
    //     // [註冊監聽事件]
    //     this.$bus.$on('specialEvent', event => {
    //         toastr.info(event.msg, event.title)
    //     });
    // },
    // beforeDestroy: function() {
    //     // [銷毀監聽事件]
    //     // 最好在组件銷毀前，清除 specialEvent 所有監聽 
    //     // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
    //     this.$bus.$off('specialEvent');
    // }
}
</script>

<style scoped>
.full{
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(30, 30, 30, 0.5);
    z-index: 2;
}
/* Center the loader */
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s
}

@-webkit-keyframes animatebottom {
  from { bottom:-100px; opacity:0 } 
  to { bottom:0px; opacity:1 }
}

@keyframes animatebottom { 
  from{ bottom:-100px; opacity:0 } 
  to{ bottom:0; opacity:1 }
}

#myDiv {
  display: none;
  text-align: center;
}
</style>