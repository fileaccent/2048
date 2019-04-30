function swapa(i, j, p) {
    var parent = $("div.part").eq(i * j);
    var prevItem = $("div.part").eq(i * p);
    var parentLeft = parent.position().left;
    var prevItemLeft = prevItem.position().left;
   
    parent.clone().css({ position: 'absolute', visibility: 'visible', left: parentTop }).animate({ top: prevItemLeft }, 500, function () {
    parent.css('visibility', 'hidden');
    prevItem.css('visibility', 'hidden');
        $(this).remove();
        parent.css('visibility', 'visible');
        prevItem.css('visibility', 'visible');
    });
};