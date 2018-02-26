$(document).ready(function() {
    // 第一层公司名字
    $(".VerticalMenu>div .company").click(function() {
        // 初始化颜色
        $('.all_title').removeClass('com_bg')
        $('.company').css("background-color", "#fff");
        $('.depart').css("background-color", "#fff");
        $('.depart_one>div').css("background-color", "#fff");
        // 去掉部门旋转
        $(this).css("background-color", "#084C94");
        $(".VerticalMenu>div>div:last-child .depart").children("i.fa-angle-right").attr("leng", "")
        $(".VerticalMenu>div>div:last-child .depart").children("i.fa-angle-right").css({
            "transform": "rotate(0deg)",
            "color": "#000000"
        })
        $xz = $(".VerticalMenu>div .company");
        $($xz).not($(this)).siblings("[name='xz']").stop().slideUp(400);
        $(this).siblings("[name='xz']").slideToggle(400);
        $(".VerticalMenu>div>div:last-child .depart_one").hide();


    })

    // 第二层公司名字对应的部门名字
    $(".VerticalMenu>div>div:last-child .depart").click(function() {
        $('.depart').css("background-color", "#fff");
        $('.depart_one>div').css("background-color", "#fff");
        $(this).css("background-color", "#79B5F4");

        $xz1 = $(".VerticalMenu>div>div:last-child .depart");
        $($xz1).not(this).children("i.fa-angle-right").css({
            "transform": "rotate(0deg)",
            "color": "#000000"
        }).attr("leng", "")

        if ($(this).children("i.fa-angle-right").attr("leng") != "s") {
            $(this).children("i.fa-angle-right").attr("leng", "s")
            $(this).children("i.fa-angle-right").css({
                "transform": "rotate(90deg)",
                "color": "#000000"
            })
        } else {
            $(this).children("i.fa-angle-right").attr("leng", "")
            $(this).children("i.fa-angle-right").css({
                "transform": "rotate(0deg)",
                "color": "#000000"
            })
        }

        $($xz1).not($(this)).siblings("[name='xz1']").stop().slideUp(400);
        $(this).siblings("[name='xz1']").slideToggle(400);
    })

    // 第三层 公司部门下对应的车辆
    $(".VerticalMenu>div>div:last-child .depart_one>div").click(function() {
        $('.depart_one>div').css("background-color", "#fff");
        $(this).css("background-color", "#CEE1F6");



    })
})