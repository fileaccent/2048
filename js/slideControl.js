 var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function (e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function (e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                ;
                break;
            case 1:
                up(); check();
                break;
            case 2:
                down(); check();
                break;
            case 3:
                left(); check();
                break;
            case 4:
                right(); check();
                break;
            default:
        }
    }, false);
    var overscroll = function (el) {

        el.addEventListener('touchstart', function () {

            var top = el.scrollTop

            , totalScroll = el.scrollHeight

            , currentScroll = top + el.offsetHeight;
            //If we're at the top or the bottom of the containers  

            //scroll, push up or down one pixel.  

            //  

            //this prevents the scroll from "passing through" to  

            //the body.  

            if (top === 0) {

                el.scrollTop = 1;

            } else if (currentScroll === totalScroll) {

                el.scrollTop = top - 1;

            }

        });

        el.addEventListener('touchmove', function (evt) {

            //if the content is actually scrollable, i.e. the content is long enough  

            //that scrolling can occur  

            if (el.offsetHeight < el.scrollHeight)

                evt._isScroller = true;

        });

    }

    overscroll(document.querySelector('.scroll'));

    document.body.addEventListener('touchmove', function (evt) {

        //In this case, the default behavior is scrolling the body, which  

        //would result in an overflow.  Since we don't want that, we preventDefault.  

        if (!evt._isScroller) {

            evt.preventDefault();

        }

    });