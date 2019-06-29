var deff = $.ajax({
    type: "get",
    url: "js/ShoppingCart.json?_id=" + new Date().getTime(),
    async: true
});
deff.done(function (json) {
    console.log(json);

    var str = "";
    for (var attr in json) {
        console.log(json[attr]);

        for (var i in json[attr]) {
        var pro = json[attr][i];
        console.log(pro);
        console.log(json[attr].length);

        // for (var i = 0; i < json[attr].length; i++) {
            str +=
                `<li>
                        <p><img src=${pro.src}></p>
                        <a href="" style="color: black"><span>${pro.name}</span></a>
                        <i>￥${pro.price}</i>
                        <button>加入购物车</button>
                    </li>`

        // }


        }
    }
    $(".cnxh-box ul ").html(str)

    $lis = $(".cnxh-box ul li")
    // $btn = $(".cnxh-box ul li button")
    $lis.hover(function () {
       $(this).find("button").show()
    }, function () {
        $(this).find("button").hide()
    })



})