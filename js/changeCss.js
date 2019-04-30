var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        //�ƶ��豸������汾��Ϣ
        return {
            //IE�ں�
            trident: u.indexOf('Trident') > -1,
            //opera�ں�      
            presto: u.indexOf('Presto') > -1,
            //ƻ�����ȸ��ں�          
            webKit: u.indexOf('AppleWebKit') > -1,
            //����ں�
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            //�Ƿ�Ϊ�ƶ��ն�
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
            //ios�ն�
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //android�ն˻���uc�����
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
            //�Ƿ�ΪiPhone����QQHD�����
            iPhone: u.indexOf('iPhone') > -1 , 
            //�Ƿ�iPad           
            iPad: u.indexOf('iPad') > -1,
            //�Ƿ�webӦ�ó���û��ͷ����ײ�
            webApp: u.indexOf('Safari') == -1
        };
    }(), 
    language:(navigator.browserLanguage || navigator.language).toLowerCase()  
}   
   
if(browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad){    cssChange();     
}  
 
function cssChange(){
    var link = document.getElementsByTagName('link')[0];
    //PC��Ӧ�õ���ʽ�ļ���style.css
    link.setAttribute('href','style\styleMobile.css');
    //Mobile��Ӧ����ʽ�ļ���style_B.css
}
 