$(function(){
  // 轮播图的索引
  var index = 0

  // 定时器
  var timer = null;

  // 轮播图数量
  var len = $('.banner-slide').length;

  function slideImg(){
    // 滑过清除定时器，离开继续
    $('#main').hover(function(){
      // hover第一个参数：相当于 mouseenter, 停止定时器 timer
      if (timer) {
        clearInterval(timer);
      }

    }, function(){
      // hover第二个参数：相当于 mouseleave，开始定时器 timer
      timer = setInterval(function(){
        index++;
        if (index>=len) {
          index = 0
        }
        // 切换图片
        changeImg()
      }, 2000)
    })

    // 自动触发鼠标离开 mouseleave 时间，使轮播图自动播放
    $('#main').trigger('mouseleave')

    // 点击圆点切换图片
    $('#dots').on('click', function(event){
      index = $(event.target).index()
      changeImg()
    })

    // 下一张
    $('#next').click(function(){
      index++;
      if (index>=len) {
        index=0
      }
      changeImg()
    })

    // 上一张
    $('#prev').click(function(){
      index--;
      if (index<0) {
        index = len - 1;
      }
      changeImg()
    })

  }

  // 切换图片、改变圆点激活状态
  function changeImg(){
    // $('.banner-slide').removeClass('slide-active')
    // $('.banner-slide').eq(index).addClass('slide-active')

    $('.banner-slide').hide().eq(index).show()
    $('#dots span').removeClass().eq(index).addClass('dot-active')
  }

  slideImg()
})