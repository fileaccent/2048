function down() {
    var sequare = 0;
    for (j = 0; j < 4;j++) {
        var q = 0, z; var output = 0;
        for (z = 0; z < 4; z++)
            if ($("div.part").eq(z * 4 +j ).text() == "" || $("div.part").eq(z * 4 +j ).text() == null)
                q++;
        if (q == 4) continue;
        i = 3; var used = new Array("0", "0", "0", "0");
        while (i >= 0) {
            for (; $("div.part").eq(i * 4 +j ).text() == "" || $("div.part").eq(i * 4 + j).text() == null; i--) if (i > 3 || i < 0) break; p = i; if (i > 3 || i < 0) break;//alert("p=" + p);
            i--; if (i >3||i<0) break;
            for (; $("div.part").eq(i * 4 + j).text() == "" || $("div.part").eq(i * 4 + j).text() == null; i--) if (i > 3 || i < 0) break; if (i > 3 || i < 0) break;
            if ($("div.part").eq(i * 4 + j).text() == $("div.part").eq(p * 4 + j).text() && used[i] == 0 && used[p] == 0) {
                $("div.part").eq(i * 4 + j).text($("div.part").eq(p * 4 + j).text() * 2); num1 = Number($("div.score p").eq(1).text()) + Number($("div.part").eq(i * 4 + j).text()); $("div.score>p").eq(1).text(num1);
                $("div.part").eq(p * 4 + j).text("");
                used[i] = 1; used[p] = 1;
                output = 1;  sequare++;
            }
            i= p - 1;// alert("j3=" + j);
            if (i < 0 || i > 3) break;
        }
        for (i = 0; i < 4; i++) {
            c = $("div.part").eq(i * 4 + j).text();                                                                                                          // alert("c=" + c);
            if (!c == "" || c == null)                                                                                                                       //alert("i="+i);
                d = i;
        }
        if (d != 3) {
            for (k = 0; d >= 0; d--) {
                c = $("div.part").eq(d * 4 +j ).text();                                                                                                 //alert("c=" + c);
                if (!c == "" || c == null) {
                    $("div.part").eq( (3 - k)* 4 +j ).html($("div.part").eq(d * 4 +j ).html());
                    $("div.part").eq(d * 4 + j).html("");
                     sequare++;
                    k++;
                } //if c结束
            } //for k d结束
        }//ifd!=3
        else {
            for (; !$("div.part").eq(d * 4 + j).text() == "" || $("div.part").eq(d * 4 + j).text() == null; d--) if (d < 0 || d > 3) break; m = d;if (m <= 0 || m > 3) continue; //alert("d=" + d);
            //不等于空时继续循环, 找到从右到左第一个空元素
            for (; $("div.part").eq(d * 4 + j).text() == "" || $("div.part").eq(d * 4 + j).text() == null; d--) if (d < 0 || d > 3) break; if (d < 0 || d > 3) continue;                                                       // alert("d=" + d);
            for (; d>=0&&m>=0;m--, d--) {
                c = $("div.part").eq(d * 4 +j ).text();                                                                                                                                            //alert("c=" + c);
                if (!c == "" || c == null) {
                    $("div.part").eq( m* 4 +j ).html($("div.part").eq(d * 4 + j).html());
                    $("div.part").eq(d * 4 + j).html("");
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