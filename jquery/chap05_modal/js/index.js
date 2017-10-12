$(document).ready(function($){

  // 登录链接事件
  $('#loginLink').click(function(){
    // 获取登录窗体代码
    // var loginHtml = $('#loginHtml').show()
    var loginHtml = $('#loginHtml').html()
    showLayer(loginHtml, 400, 300, closeCallback)

    // 登录表单校验
    $('#loginSubmitBtn').click(function(){
      var username = $('input[name="username"]').val();
      var password = $('input[name="password"]').val();
      if (username === 'imooc' && password === 'imooc') {
        alert("登录成功")
      }else{
        $(".error-msg").html("账号或密码输入错误")
      }
    })
  })

  // 注册链接事件
  $('#regeLink').click(function(){
    // 获取登录窗体代码
    // var loginHtml = $('#loginHtml').show()
    var regeHtml = $('#regeHtml').html()
    showLayer(regeHtml, 400, 300, closeCallback)

    // 登录表单校验
    $('#regeSubmitBtn').click(function(){
      var username = $('input[name="username"]').val();
      var password = $('input[name="password"]').val();
      var repassword = $('input[name="repassword"]').val();
      if (username === 'imooc' && password === 'imooc' && repassword === password) {
        alert("登录成功")
      }else{
        $(".error-msg").html("账号或密码输入错误")
      }
    })
  })

  function closeCallback(){
    $('.error-msg').html("");
  }


  // 显示弹出层
  function showLayer(html, width, height, closeCallback){
    // 显示弹出层遮罩
    $('#layer-mask').show()
    // 显示弹出层窗体
    $('#layer-pop').show()

    // 动态设置弹出层窗体样式
    $('#layer-pop').css({
      width: width,
      height: height
    })

    $('#layer-content').html(html)
    // 弹出层关闭按钮绑定事件
    $('#layer-close').click(function(){
      hideLayer()

      // 关闭的回调函数
      closeCallback()
    })

  }

  // 隐藏弹出层
  function hideLayer(){
    // 关闭弹出层
      $('#layer-mask').hide()
      $('#layer-pop').hide()
  }

})