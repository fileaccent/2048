var i, j, k, m, d, num, n, flag, p;
var warning = 0;
var sequares = 0;
//开始操作
function num() {
    var seq, c, a1, a2;
    for (i = 0; i < 16; i++) $(".part ").eq(i).text(null);
    for (seq = 0; seq < 2; seq++) {
        do {
            i = Math.round(Math.random() * 3);
            j = Math.round(Math.random() * 3);
        } while (a1 == i || a2 == j);
        num = 4 - Math.round(Math.random()) * 2;
        $(".part ").eq(i * 4 + j).text(num);
        a1 = i;
        a2 = j;
    }
}
$(document).ready(function () {
    $("button.start").click(function() {
        var seq, c, a1, a2;
        for (i = 0; i < 16; i++) $(".part ").eq(i).text(null);
        for (seq = 0; seq < 2; seq++) {
            do {
                i = Math.round(Math.random() * 3);
                j = Math.round(Math.random() * 3);
            } while (a1 == i || a2 == j);
            num = 4 - Math.round(Math.random()) * 2;
            $(".part ").eq(i * 4 + j).text(num);
            a1 = i;
            a2 = j;
            $("div.part").eq(i * 4 + j).animate({backgroundColor:'rgb(255,192,159)'});
             $("div.part").eq(i * 4 + j).animate({ backgroundColor: 'rgb(255, 238, 147)'});   
        }
    });
    
});
$(document).ready(function () {
    $("button.finish1").click(function () {
        var seq, c, a1, a2;
        for (i = 0; i < 16; i++) $(".part ").eq(i).text(null);
        for (seq = 0; seq < 2; seq++) {
            do {
                i = Math.round(Math.random() * 3);
                j = Math.round(Math.random() * 3);
            } while (a1 == i || a2 == j);
            num = 4 - Math.round(Math.random()) * 2;
            $(".part ").eq(i * 4 + j).text(num);
            a1 = i;
            a2 = j;
        }
        $("button.finish1").hide();
        $(".excellent").hide();
    });

});
$(document).ready(function () {
    $("button.finish2").click(function () {
        var seq, c, a1, a2;
        for (i = 0; i < 16; i++) $(".part ").eq(i).text(null);
        for (seq = 0; seq < 2; seq++) {
            do {
                i = Math.round(Math.random() * 3);
                j = Math.round(Math.random() * 3);
            } while (a1 == i || a2 == j);
            num = 4 - Math.round(Math.random()) * 2;
            $(".part ").eq(i * 4 + j).text(num);
            a1 = i;
            a2 = j;
        }
        $("button.finish2").hide();
        $(".fault").hide();
    });

});

$(document).keydown(function (event) {
        var keyNum = event.which;   //获取键值 
        if (keyNum == 100 || keyNum == 68) {
            right(); check();
        }
        else if (keyNum == 115 || keyNum == 83) {

            down(); check();

        }
        else if (keyNum == 87 || keyNum == 119) {
            up(); check();

        }
        else if (keyNum == 65 || keyNum == 97) {
            left(); check();
        }
        else;

});

function check() {
    for (var i = 0; i < 16; i++)
        if ($("div.part").eq(i).text() == 2048) {
            $(".excellent").toggle();
            $("button.finish1").toggle();
        }
    var flag2 = 0;
    if (empty()== 1) {
        for (var i = 0; i < 4; i++)
            for (j = 0; j < 4; j++) {
                if ($("div.part").eq(i * 4 + j).text() == $("div.part").eq(i * 4 + j + 1).text() )
                    flag2++;//alert("i="+i+" "+"j="+j+" "+"flag2="+flag2);
                if ($("div.part").eq(i * 4 + j).text() == $("div.part").eq((i + 1) * 4 + j).text() )
                    flag2++;//alert("i="+i+" "+"j="+j+" "+"flag2="+flag2);
            } //alert("flag2=" + flag2);
        if (flag2 == 0 ) {
            $(".fault").toggle();
            $("button.finish2").toggle();
        }
    }

}
function empty(){
    var i=0;
    for(i=0;i<16;i++)
        if($("div.part").eq(i).text()==null||$("div.part").eq(i).text()=="")
    {
        return 0;
    }
    return 1;
}
        

