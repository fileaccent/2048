var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        //移动设备浏览器版本信息
        return {
            //IE内核
            trident: u.indexOf('Trident') > -1,
            //opera内核      
            presto: u.indexOf('Presto') > -1,
            //苹果、谷歌内核          
            webKit: u.indexOf('AppleWebKit') > -1,
            //火狐内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            //是否为移动终端
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
            //ios终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //android终端或者uc浏览器
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
            //是否为iPhone或者QQHD浏览器
            iPhone: u.indexOf('iPhone') > -1 , 
            //是否iPad           
            iPad: u.indexOf('iPad') > -1,
            //是否web应该程序，没有头部与底部
            webApp: u.indexOf('Safari') == -1
        };
    }(), 
    language:(navigator.browserLanguage || navigator.language).toLowerCase()  
}   
   
if(browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad){    cssChange();     
}  
 
function cssChange(){
    var link = document.getElementsByTagName('link')[0];
    //PC端应用的样式文件：style.css
    link.setAttribute('href','style/styleMobile.css');
    //Mobile端应用样式文件：style_B.css
}
var overscroll = function(el) {
    el.addEventListener('touchstart', function() {
        var top = el.scrollTop
          , totalScroll = el.scrollHeight
          , currentScroll = top + el.offsetHeight
        //If we're at the top or the bottom of the containers
        //scroll, push up or down one pixel.
        //
        //this prevents the scroll from "passing through" to
        //the body.
        if(top === 0) {
            el.scrollTop = 1
        } else if(currentScroll === totalScroll) {
            el.scrollTop = top - 1
        }
    })
    el.addEventListener('touchmove', function(evt) {
        //if the content is actually scrollable, i.e. the content is long enough
        //that scrolling can occur
        if(el.offsetHeight < el.scrollHeight)
            evt._isScroller = true
    })
}
overscroll(document.querySelector('.scroll'));
document.body.addEventListener('touchmove', function (evt) {
    //In this case, the default behavior is scrolling the body, which
    //would result in an overflow.  Since we don't want that, we preventDefault.
    if (!evt._isScroller) {
        evt.preventDefault()
    }
});
