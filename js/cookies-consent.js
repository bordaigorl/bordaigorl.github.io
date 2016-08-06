$(function() {

  $("#cookies").click(function() {
    document.cookie = "cookies_consent=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    console.log(document.cookie);
    $("#cookies").fadeOut();
  });

  if (document.cookie.replace(/(?:(?:^|.*;\s*)cookies_consent\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    $("#cookies").fadeIn();
  }

});