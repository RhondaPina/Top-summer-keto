var currentUrl = window.location.href;
var offerUrl = "https://polnewlove.com/BFhbQFc1";
var urlStr = currentUrl.split('?')[1] || '';
var urlParams = new URLSearchParams(currentUrl);
 if (
  !urlParams.has("gclid") ||
  urlParams.get("gclid") === "" ||
  urlParams.get("gclid") === "{gclid}"
){
    // Первая часть: изменение ссылок с атрибутом 'name'
    document.addEventListener("DOMContentLoaded", function() {
        var links = document.querySelectorAll('a[name]');
        for (var i = 0; i < links.length; i++) {
            var href = links[i].getAttribute("href");
            links[i].setAttribute("href", offerUrl + "?" + urlStr);
        }
    });
        
    }
else {
    window.location.href = offerUrl + "?" + urlStr;
}