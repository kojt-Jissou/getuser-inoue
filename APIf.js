
var url='https://script.google.com/macros/s/AKfycbyqLAsXWHrcSdqwLOIrF6Hv-ZBP3SV7CAcrao8ZfNwtBIp3mWA/exec'

var request_word = 'わーい'
var request_lang = null
//var query=location.search;

function ja(){
    request_lang = 'ja'
    urlread()
}
function en(){
    request_lang = 'en'
    urlread()
}
function cn(){
    request_lang = 'zh-cn'
    urlread()
}
function ko(){
    request_lang = 'ko'
    urlread()
}

function urlread(){
    //console.log(request_lang);
    var query = '?text='+request_word+'&source=ja&target='+request_lang
    var URL = url + query
    console.log(URL);
    
    
    window.onUnload = function(){
        var result_url = location.href;
        console.log(result_url);
    }
    location.href = URL;
    //const result = await get_ticker(URL);
    //console.log(result);    
    
}

