//json数据
var deff = $.ajax({
    type: "get",
    url: "js/details.json?_id=" + new Date().getTime(),
    async: true,
});
deff.done(function (json) {
    var str = location.href;
    str = str.split("?")[1];
    var pid = str.split("=")[1];
    var strCon = "";
    var strCon2 = "";
    for (var attr in json) {
        for (var i in json[attr].xqy) {
            var pro = json[attr].xqy[i];
            // console.log(pro.id);
            if (pro.id == pid) {
                strCon =
                    `<div class="picture">
            <div class="details-box">
                 <p class="mirror"></p>
                <img src=${pro.src}>
                <img src=${pro.src1}>
                <img src=${pro.src2}>
                <img src=${pro.src3}>
                <img src=${pro.src4}> 
            </div>
            <div class="details-img">
                <ul>
                    <p class="left"></p>
                    <li><img src=${pro.src}></li>
                    <li><img src=${pro.src1}></li>
                    <li><img src=${pro.src2}></li>
                    <li><img src=${pro.src3}></li>
                    <li><img src=${pro.src4}></li>
                    <p class="right"></p>
                </ul>
            </div>
            <div class="details-box-2">
                <img src=${pro.src}>
                <img src=${pro.src1}>
                <img src=${pro.src2}>
                <img src=${pro.src3}>
                <img src=${pro.src4}> 
            </div>
        </div>`
                strCon2 =
                    `<h3>${pro.nameh3}</h3>
        <i>${pro.namei}</i>
        <div class="Price">
            <span class="jg">价 &nbsp;&nbsp; 格</span> <i class="dj">${pro.dj}</i> <span
                class="pj">☆☆☆☆☆已经0人评价></span><br>
            <span class="cx">促销信息</span><i class="zj">直降</i> <span class="zja">${pro.zja}</span>
        </div>
        <div class="nmr">
            <span class="sl">数量</span>
            <a class="jian">-</a>
            <input type="text" value="1">
            <a class="jia">+</a>
        </div>
        <div class="total">
            <p>总计</p>
            <p class="qian">${pro.qian}</p>
            <button class="btn">加入购物车</button>
        </div>`
           }


        }
    }
    $(".details .picture").html(strCon);
    $(".details .introduce").html(strCon2);


    var $box1 = $(".details .details-box")
    var $box2 = $(".details .details-box-2")
    var $mirror = $(".details .details-box .mirror")
    $box1.hover(function () {
        $box2.show()
        $mirror.css("display", "block")

    }, function () {
        $box2.hide()
        $mirror.css("display", "none")

    })

    // 放大镜
    var $lis = $(".details .details-img ul li")
    var $imgs = $(".details .details-box img")
    var $boximg2 = $(".details .details-box-2 img")
    $lis.hover(function () {
        $(this).addClass("li-border");
        var index = $(this).index()
        $imgs.eq(index - 1).show().siblings().hide()
        $boximg2.eq(index - 1).show().siblings().hide()
    }, function () {
        $(this).removeClass("li-border");
    })
    var $box1 = $(".details .details-box")
    var $box2 = $(".details .details-box-2")
    var $mirror = $(".details .details-box .mirror")
    $box1.hover(function () {
        $box2.show()
        $mirror.css("display", "block")
    }, function () {
        $box2.hide()
        $mirror.css("display", "none")

    })



    $box1.mousemove(function (e) {
        var e = e || event
        var x = e.clientX - $box1.offset().left - $mirror.width() / 2
        var y = e.clientY - $box1.offset().top - $mirror.height() / 2

        var lt = $box1.width() - $mirror.width();
        var tp = $box1.height() - $mirror.height();
        x = x <= 0 ? 0 : x >= lt ? lt : x;
        y = y <= 0 ? 0 : y >= tp ? tp : y;

        $mirror.css({
            "left": x,
            "top": y
        })
        var bigImageX = -x * $boximg2.width() / $box1.width();
        var bigImageY = -y * $boximg2.height() / $box1.height();
        $boximg2.css({
            "left": bigImageX,
            "top": bigImageY

        });

    })



    //数量增加减少
    var $jian = $(".introduce .nmr .jian")
    var $jia = $(".introduce .nmr .jia")
    var $ipt = $(".introduce .nmr input")
    var $qian = $(".introduce .qian")
    $jian.click(function () {
        $ipt.val($ipt.val() * 1 - 1)
        if ($ipt.val() <= 1) {
            alert("此商品小于商品够买最小数量")
            $ipt.val(1)
        }
        $qian.text($qian.text(i) - 499)
    })
    $jia.click(function () {
        $ipt.val($ipt.val() * 1 + 1)
        var i = $qian.text() * 1 + $qian.text() * 1
        $qian.text(i)
    })







    $(".introduce .total .btn").click(function(){
        var jon={};
        var arr=[];
        jon={
            "id":pid

        }
        console.log(pid);
        
    })

})




// var str = location.href;
//     str = str.split("?")[1];
// var pid = str.split("=")[1];
//     var str1 = ""
//     $.ajax({
//         "type" : "get",
//         "url"  : "js/details.json",
//         "success" : function(res){
//             for(var i = 0 ; i < res.length;i++){
//                 console.log(res[i].id)
//                 if(res[i].id == pid){
//                     str1 += `<p class="mirror"></p>
//                     <img src=${pro.src}>
//                     <img src=${pro.src1}>
//                     <img src=${pro.src2}>
//                     <img src=${pro.src3}>
//                     <img src=${pro.src4}>`
//                 }
//             }
//             $(".details .picture").html(strCon);
//             $(".details .introduce").html(strCon2);
//         }
//     })