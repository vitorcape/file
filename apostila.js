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
  function Mod4() {
    var win = document.querySelector('iframe#Mod4').contentWindow,
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