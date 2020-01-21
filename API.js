var url='https://script.google.com/macros/s/AKfycbyqLAsXWHrcSdqwLOIrF6Hv-ZBP3SV7CAcrao8ZfNwtBIp3mWA/exec'

var request_word = '猫'
var request_lang = null

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
    var query = '?text='+request_word+'&source=ja&target='+request_lang
    var URL = url + query
    fetch(URL)
    .then(response => response.text())
    .then(text => {
        console.log(text);
    });
}