function left() {
    var sequare = 0; var num1;
    for (i = 0; i < 4;i++) {
         // alert("d=" + d); 
        var q = 0, z;
        var output = 0;
        for (z = 0; z < 4; z++)
            if ($("div.part").eq(i * 4 + z).text() == "" || $("div.part").eq(i * 4 + z).text() == null)
                q++;
        if (q == 4) continue;
        j = 0;
        var used = new Array("0", "0", "0", "0");
        while (j <= 3) {                                                                                                                 // alert("i=" + i);
        for (; $("div.part").eq(i * 4 + j).text() == "" || $("div.part").eq(i * 4 + j).text() == null; j++)
            if (j < 0 || j > 3) break;
           p = j; if (p < 0||p>3) break;                                                                                                                        //  alert("p=" + p);
           j++; if (j < 0 || j > 3) break;
           for (; $("div.part").eq(i * 4 + j).text() == "" || $("div.part").eq(i * 4 + j).text() == null; j++) if (j < 0 || j > 3) break;                  //alert("j2=" + j);
           if (j < 0 || j > 3) break;
           if ($("div.part").eq(i * 4 + j).text() == $("div.part").eq(i * 4 + p).text()&&used[j]==0&&used[p]==0) {
               $("div.part").eq(i * 4 + p).text($("div.part").eq(i * 4 + j).text() * 2); num1=Number($("div.score p").eq(1).text()) +Number( $("div.part").eq(i * 4 + p).text()); $("div.score>p").eq(1).text(num1); //alert(num1);                                                            // alert("j="+j+" "+$("div.part").eq(i * 4 + j).text());
               $("div.part").eq(i * 4 + j).text("");
               used[j] = 1; used[p] = 1;
               output = 1; sequare++;
           }
            j = p + 1;                                                                                                                                     // alert("j3=" + j);
            if (j > 3 || j < 0) break;
        }                                                                                                                                               // alert("j=" + j);
        for (j = 3; j >= 0; j--) {
            c = $("div.part").eq(i * 4 + j).text();                                                                                                 // alert("c=" + c);
            if (!c == "" || c == null) {
                d = j; 
            }

        }                                                                                                                                                       //  alert("d=" + d);
        if (d != 0) {
            for (k = 3; d <= 3; d++) {
                c = $("div.part").eq(i * 4 + d).text(); if (d > 3 || d < 0) break;                                                                                            // alert("c=" + c);
                if (!c == "" || c == null) {
                    $("div.part").eq(i * 4 + 3 - k).html($("div.part").eq(i * 4 + d).html());
                    $("div.part").eq(i * 4 + d).html("");
                  /*  var parent = $("div.part").eq(i *4+ (3-k));
                    var prevItem = $("div.part").eq(i*4+ d);
                    var parentLeft = parent.position().left;
                    var prevItemLeft = prevItem.position().left;
                    parent.animate({ left: prevItemLeft }, 1000);
                    prevItem.animate({ left: parentLeft }, 1
                    alert($("div.part").eq(i * 4 +d ).html());*/
                   // $("div.part").eq(i * 4 + 3 - k).animate({ backgroundColor: 'rgb(255,192,159)' });
                    // $("div.part").eq(i * 4 + 3 - k).animate({ backgroundColor: 'rgb(255, 238, 147)' });
                    k--; sequare++;
                }//if c结束
            }//for k d结束
        }//ifd!=3
        else {
            for (; !$("div.part").eq(i * 4 + d).text() == "" || $("div.part").eq(i * 4 + d).text() == null; d++) if (d > 3 || d < 0) break; m = d; if (m <= 0||m>3) continue;
            for (; $("div.part").eq(i * 4 + d).text() == "" || $("div.part").eq(i * 4 + d).text() == null; d++) if (d > 3 || d < 0) break; if (d > 3 || d < 0) continue;                                        //alert("d=" + d);
            //不等于空时继续循环,找到从右到左第一个空元素
            for (; d <= 3; m++,d++) {
                c = $("div.part").eq(i * 4 + d).text();                                                                                                              //alert("c=" + c);
                if (d < 0 || d > 3) continue;
                if (!c == "" || c == null) {
                    $("div.part").eq(i * 4 + m).html($("div.part").eq(i * 4 + d).html());
                    $("div.part").eq(i * 4 + d).html("");
                    sequare++;
                }//if c结束
            }//for k d结束
        }//else d=3结束
    }
    if (sequare != 0) {
        do {
            i = Math.round(Math.random() * 3);                                                                                                        // alert("i=" + i);
            j = Math.round(Math.random() * 3);
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
}//right结束//alert("d=" + d);
            