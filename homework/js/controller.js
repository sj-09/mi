/**
 * Created by Administrator on 2017/1/29.
 */
function home($scope){

        new Swiper(".swiper-o", {
            //��������
            direction: "horizontal",
            //����ѭ��
            loop: true,
            //�Զ��ֲ�
            autoplay: 2000,
            //�Ƿ���ָ����Ч��
            touchRatio : 0.5
        })
}

angular.module("mapp")
    .controller("home",home)