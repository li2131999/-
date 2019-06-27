$(".Promotion-618").click(function () {
   location.href = "618.html"
})
//搜素点击事件(焦点)
$(".txt").focus(function () {
   $(".sousuo .ipt .txt-box").show()
})
$(".txt").blur(function () {
   $(".sousuo .ipt .txt-box").hide()
})

//选项卡
$("#tad .tad-ul li").hover(function () {
   $(this).find(".tad-box").show()
}, function () {
   $(this).find(".tad-box").hide()
})
//  轮播图
var $uls = $(".Sowing .Sowing-box .Sowing-box-ul")
var index = 0
setInterval(function () {
   index++
   if (index == 5) {
      $uls.css("left", 0)
      index = 1;
   }

   $uls.animate({
      left: -1196 * index
   }, 1500)
}, 2000)

//json数据
var deff = $.ajax({
   type: "get",
   url: "js/xsg.json?_id=" + new Date().getTime(),
   async: true
});
deff.done(function (json) {
   var strCon = "";
   for(var attr in json){
   for (var i in json[attr].xsg) {
      var pro = json[attr].xsg[i];
      console.log(pro);  
      strCon +=
               `<li><a href="http://127.0.0.1/leshishangcheng/%E4%B9%90%E8%A7%86%E7%BD%91/details.html?pid=${pro.id}">
                    <p><img src=${pro.src}></p>
                    <strong style="color: black">${pro.name}</strong>
                    <span class="qian">￥${pro.price}</span><s class="hd">￥${pro.price2}</s><br>
                    <button>${pro.btn}</button>
               
               </a></li>`
   }
   }
   $(".xsg ul").html(strCon)

})


