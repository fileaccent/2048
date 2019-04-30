function right() {
    var sequare = 0;
    for (i = 0; i < 4; i++) {
        var q = 0, z;
        var output = 0;
        for (z = 0; z < 4; z++)
            if ($("div.part").eq(i * 4 + z).text() == "" || $("div.part").eq(i * 4 + z).text() == null)
                q++;
        if (q == 4) continue;
        j = 3; var used = new Array("0", "0", "0", "0");
        while (j >= 0) {
            for (; $("div.part").eq(i * 4 + j).text() == "" || $("div.part").eq(i * 4 + j).text() == null; j--) if (j > 3 || j < 0) break; p = j; if (j > 3 || j < 0) break;//alert("p=" + p);
            j--; if (j >3||j<0) break;
            for (; $("div.part").eq(i * 4 + j).text() == "" || $("div.part").eq(i * 4 + j).text() == null; j--) if (j > 3 || j < 0) break; if (j > 3 || j < 0) break;
            if ($("div.part").eq(i * 4 + j).text() == $("div.part").eq(i * 4 + p).text() && used[j] == 0 && used[p] == 0) {
                $("div.part").eq(i * 4 + j).text($("div.part").eq(i * 4 + j).text() * 2); num1 = Number($("div.score p").eq(1).text()) + Number($("div.part").eq(i * 4 + j).text()); $("div.score>p").eq(1).text(num1);
                $("div.part").eq(i * 4 + p).text("");
                used[j] = 1; used[p] = 1;
                output = 1; sequare++;
            }
            j = p - 1;// alert("j3=" + j);
            if (j < 0 || j > 3) break;
           
        }
        for (j = 0; j < 4; j++) {
            c = $("div.part").eq(i * 4 + j).text();                                                                                                          // alert("c=" + c);
            if (!c == "" || c == null)                                                                                                                       //alert("i="+i);
                d = j;
        }
        if (d != 3) {
            for (k = 0; d >= 0; d--) {
                c = $("div.part").eq(i * 4 + d).text(); if (d < 0 || d > 3) continue;                                                                                               //alert("c=" + c);
                if (!c == "" || c == null) {
                    //alert($("div.part").eq(i * 4 + d).html());
                    $("div.part").eq(i * 4 + 3 - k).html($("div.part").eq(i * 4 + d).html());
                    $("div.part").eq(i * 4 + d).html("");
                   
                    sequare++;
                    k++;
                } //if c结束
            } //for k d结束
        }//ifd!=3
        else {
            for (; !$("div.part").eq(i * 4 + d).text() == "" || $("div.part").eq(i * 4 + d).text() == null; d--) if (d < 0 || d > 3) break; m = d; if (m <= 0||m>3) continue; //alert("d=" + d);不等于空时继续循环,找到从右到左第一个空元素
            for (; $("div.part").eq(i * 4 + d).text() == "" || $("div.part").eq(i * 4 + d).text() == null; d--) if (d < 0 || d > 3) break; if (d < 0 || d > 3) continue;
            for (; d>=0;m--, d--) {
                c = $("div.part").eq(i * 4 + d).text();// alert("c=" + c);
                if (!c == "" || c == null) {
                    $("div.part").eq(i * 4 + m).html($("div.part").eq(i * 4 + d).html());
                    $("div.part").eq(i * 4 + d).html("");//alert($("div.part").eq(i * 4 +3-k ).html())
                  
                    
                    sequare++;
                }//if c结束
            }//for k d结束
        }//else d=3结束
    }//for i
    if (sequare != 0) {
        do {
            i = Math.round(Math.random() * 3);                                                                                                        // alert("i=" + i);
            j = Math.round(Math.random() * 3);
            flag++;
            if (empty() == 1) return;
        } while (!$("div.part").eq(i * 4 + j).text() == "" || $("div.part").eq(i * 4 + j).text() == null);
        num = 4 - Math.round(Math.random()) * 2;
        $("div.part").eq(i * 4 + j).text(num);
        $("div.part").eq(i * 4 + j).animate({ backgroundColor: 'rgb(255,192,159)' });
        $("div.part").eq(i * 4 + j).animate({ backgroundColor: 'rgb(255, 238, 147)' });
        round++;
        clearRoundTime(); setRoundTime();
    }
    return 0;
}//right结束