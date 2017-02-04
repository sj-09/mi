/**
 * Created by Administrator on 2017/1/29.
 */
function home($scope){

        new Swiper(".swiper-o", {
            //滚动方向
            direction: "horizontal",
            //无限循环
            loop: true,
            //自动轮播
            autoplay: 2000,
            //是否手指滑动效果
            touchRatio : 0.5
        })
}

angular.module("mapp")
    .controller("home",home)