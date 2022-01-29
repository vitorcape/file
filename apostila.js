//<![CDATA[
function Mod1() {
  var win = document.querySelector('iframe#Mod1').contentWindow,
      css = document.querySelector('script[name="publi_css"]'),
      h = win.document.querySelector('head'),
      style = win.document.createElement('STYLE');
  // Append the CSS inside the iframe
  style.innerText = css.innerText;
  h.append(style);
}
//]]>
//<![CDATA[
function Mod2() {
  var win = document.querySelector('iframe#Mod2').contentWindow,
      css = document.querySelector('script[name="publi_css"]'),
      h = win.document.querySelector('head'),
      style = win.document.createElement('STYLE');
  // Append the CSS inside the iframe
  style.innerText = css.innerText;
  h.append(style);
}
//]]>
//<![CDATA[
function Mod3() {
  var win = document.querySelector('iframe#Mod3').contentWindow,
      css = document.querySelector('script[name="publi_css"]'),
      h = win.document.querySelector('head'),
      style = win.document.createElement('STYLE');
  // Append the CSS inside the iframe
  style.innerText = css.innerText;
  h.append(style);
}
//]]>
//<![CDATA[
  function FAQ() {
    var win = document.querySelector('iframe#faq').contentWindow,
        css = document.querySelector('script[name="publi_css"]'),
        h = win.document.querySelector('head'),
        style = win.document.createElement('STYLE');
    // Append the CSS inside the iframe
    style.innerText = css.innerText;
    h.append(style);
  }
  //]]>

let bootstrapTheme = true;
let head = document.getElementsByTagName('head')[0],  
stylesheets = ['https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js','https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js']

if (bootstrapTheme) {
    stylesheets.forEach(function(stylesheet) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = stylesheet;
        head.appendChild(link);
    });
}
var list = document.head.getElementsByTagName("link");

var num= list.length;

for ( var i =0; i<num; i = i++){

head.removeChild(list[i]);

}

(function($) {
    'use strict';
 
    $(function() {
 
      if (_userdata.session_logged_in == 0){
      	window.location.replace("/");
      }
 
    });
}(jQuery));

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'https://i.imgur.com/TpVUAp7.png';
