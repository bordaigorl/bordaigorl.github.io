function parse_query_string() {
  var param = {}, q = window.location.search.split(/[?&]/);
  for(var i in q){
    if(q[i] != ""){
      var p = q[i].split("=");
      param[p[0]] = (p[1] || true);
    }
  }
  return param;
}

var param = parse_query_string();

if((!param["static"]) && screen.width >= 666){
  document.write('<script src="lib/d3.min.js"></script>');
  document.write('<script src="js/showoff.min.js"></script>');
}