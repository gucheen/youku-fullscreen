var style = document.createElement('style');
style.id = 'ykfull-chrome';
style.textContent = 'body{overflow:hidden!important}.yk-header{display:none}.yk-sidebar-w970{display:none!important}#id_google_tr{display:none}#player{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000}#player_sidebar{display:none}#sideTool{display:none!important}.mainCol{display:none}';

var ykfullscreen_toggleFullsreen = function(isFullscreen) {
  if (isFullscreen) {
    document.head.removeChild(style);
  } else {
    document.head.appendChild(style);
  }
};