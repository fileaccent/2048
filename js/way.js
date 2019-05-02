var i, j, k, m, d, num, n, flag, p, myVar1, myVar2;
var round = 0;
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
        a2 = j; $("div.score p").eq(1).text("0");
    }
    clearGameTime(); setGameTime(); round = 0; clearRoundTime(); setRoundTime();
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
        } $("div.score p").eq(1).text("0"); clearGameTime(); setGameTime(); round = 0; clearRoundTime(); setRoundTime();
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
        $("div.part").eq(i * 4 + j).animate({ backgroundColor: 'rgb(255,192,159)' });
        $("div.part").eq(i * 4 + j).animate({ backgroundColor: 'rgb(255, 238, 147)' });
        $("button.finish1").hide();
        $(".excellent").hide(); $("div.score p").eq(1).text("0"); clearGameTime(); setGameTime(); round = 0;clearRoundTime(); setRoundTime();
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
        $("div.part").eq(i * 4 + j).animate({ backgroundColor: 'rgb(255,192,159)' });
        $("div.part").eq(i * 4 + j).animate({ backgroundColor: 'rgb(255, 238, 147)' });
        $("button.finish2").hide();
        $(".fault").hide(); $("div.score p").eq(1).text("0"); clearGameTime(); setGameTime(); round = 0; clearRoundTime(); setRoundTime();
    });

});

$(document).keydown(function (event) {
        var keyNum = event.which;   //获取键值 
        if (keyNum == 100 || keyNum == 68) {
            right(); check(); 
           
            $("#roundNumValue").text("第" + round + "回");
        }
        else if (keyNum == 115 || keyNum == 83) {

            down(); check(); 
        
            $("#roundNumValue").text("第" + round + "回");
        }
        else if (keyNum == 87 || keyNum == 119) {
            up(); check(); 
      
            $("#roundNumValue").text("第" + round + "回");
        }
        else if (keyNum == 65 || keyNum == 97) {
            left(); check(); 
        
            $("#roundNumValue").text("第" + round + "回");
        }
        else;

});

function check() {
    success();
    fail();
    getScore();
    $("#moveMusic")[0].play();

}
function empty() {
    var i = 0;
    for (i = 0; i < 16; i++)
        if ($("div.part").eq(i).text() == null || $("div.part").eq(i).text() == "") {
            return 0;
        }
    return 1;
}
function success() {
    for (var i = 0; i < 16; i++)
        if ($("div.part").eq(i).text() == 2048) {
            $(".excellent").toggle();
            $("button.finish1").toggle();
        }
}
function fail() {
    var flag2 = 0;
    if (empty() == 1) {
        for (var i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if ($("div.part").eq(i * 4 + j).text() == $("div.part").eq(i * 4 + j + 1).text())
                    flag2++;//alert("i="+i+" "+"j="+j+" "+"flag2="+flag2);
                if ($("div.part").eq(i * 4 + j).text() == $("div.part").eq((i + 1) * 4 + j).text())
                    flag2++;//alert("i="+i+" "+"j="+j+" "+"flag2="+flag2);
            } //alert("flag2=" + flag2)
        }
        for (j = 0; j < 3; j++)
            if ($("div.part").eq(3 * 4 + j).text() == $("div.part").eq(3 * 4 + j + 1).text())
                flag2++;
        for (i = 0; i < 3; i++)
            if ($("div.part").eq(i * 4 + 3).text() == $("div.part").eq((i + 1) * 4 + 3).text())
                flag2++;
        if (flag2 == 0) {
            $(".fault").toggle();
            $("button.finish2").toggle();getScore();
        }
    }
    
}
function getScore()
{  var num2;
    num2=Number($("div.score p").eq(1).text());
    if (Number($("div.maxScore p").eq(1).text()) == null)
        $("div.maxScore p").eq(1).text(num2);
    else if (num2 > Number($("div.maxScore p").eq(1).text()))
        $("div.maxScore p").eq(1).text(num2);
    else;
        }
function setColor(a){
    if(a.text==""||a.text==0)
        a.css({backgroundColor:rgb(153, 153, 0)});
    if(a.text==2)
        a.css({backgroundColor:	rgb(255, 214, 153)});
    if(a.text==4)
        a.css({backgroundColor:	rgb(255, 255, 115)});
    if(a.text==8)
        a.css({backgroundColor:	rgb(223, 255, 128)});
    if(a.text==16)
        a.css({backgroundColor:	rgb(128, 255, 128)});
    if(a.text==32)
        a.css({backgroundColor:	rgb(128, 255, 128)});
    if(a.text==64)   
        a.css({backgroundColor:	rgb(144, 239, 215)});
    if(a.text==128)
        a.css({backgroundColor: rgb(0, 204, 204)});
    if(a.text==256)
        a.css({backgroundColor: rgb(0, 191, 255)});
    if(a.text==512)
        a.css({backgroundColor:	rgb(223, 128, 255)});
    if(a.text==1024)
        a.css({backgroundColor:	rgb(223, 128, 255)});
    if(a.text==2048)
        a.css({backgroundColor:	rgb(255, 128, 191)});
}
function setMoveMusicValue() {
    document.getElementById("moveMusic").volume = document.getElementById("moveMusicValue").value / 100;
    document.getElementById("moveMusic").muted = false;
    document.getElementById("showMoveMusicValue").innerHTML=document.getElementById("moveMusicValue").value;
}
function setBackgroundMusicValue() {
    document.getElementById("backgroundMusic").volume = document.getElementById("backgroundMusicValue").value / 100;
    document.getElementById("backgroundMusic").muted = false;
    document.getElementById("showBackgroundMusicValue").innerHTML = document.getElementById("backgroundMusicValue").value;
}
function startPause() {
    var audio = document.getElementById('backgroundMusic');
    if (audio !== null) {
        //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
        ;
        if (audio.paused) {
            audio.play(); $("#setStartPause").text("关闭背景音乐");
        } else {
            audio.pause();$("#setStartPause").text("打开背景音乐");
        }
    }
}
var startGameTime = new Date();
var startRoundTime = new Date();
function setGameTime() {
    myVar1 = setInterval(function () { set() }, 1000);
    function set() {
        var d = new Date();
        document.getElementById("gameTimeValue").innerHTML =Math.round((d-startGameTime)/1000)+"秒" ;
    }
}
function clearGameTime() {
    startGameTime = new Date();
    clearInterval(myVar1);
    document.getElementById("gameTimeValue").innerHTML = "0 秒";
}
function setRoundTime() {
    myVar2 = setInterval(function () { set() }, 1000);
    function set() {
        var d = new Date();
        var n = startRoundTime.toLocaleTimeString();
        var t = d.toLocaleTimeString();
        document.getElementById("roundTimeValue").innerHTML = Math.round((d - startRoundTime) / 1000) + "秒";
    }
}
function clearRoundTime() {
    startRoundTime = new Date();
    clearInterval(myVar2);
    document.getElementById("roundTimeValue").innerHTML = "0 秒";
}
function getNumberBackgroundColor(number) {
    switch (number) {
    case 2:
        return "#eee4da";
        break;
    case 4:
        return "#eee4da";
        break;
    case 8:
        return "#f26179";
        break;
    case 16:
        return "#f59563";
        break;
    case 32:
        return "#f67c5f";
        break;
    case 64:
        return "#f65e36";
        break;
    case 128:
        return "#edcf72";
        break;
    case 256:
        return "#edcc61";
        break;
    case 512:
        return "#9c0";
        break;
    case 1024:
        return "#3365a5";
        break;
    case 2048:
        return "#09c";
        break;
    case 4096:
        return "#a6bc";
        break;
    case 8192:
        return "#93c";
        break;
    }
    return "black";
}

function getNumberColor(number) {
    if (number <= 4){
        return "#776e65";
    }
    return "white";
}
