function do_search_post() {
  var q = $("#search-post").val();
  var $res = $("#search-results");
  var res_count = 0;
  $res.html('');
  $("#search-results-count").text('');
  if(q) {
    $res.html('<div class="results-count"></div><ul class="results"></ul>');
    var $list = $res.find('ul');
    var $count = $res.find('.results-count');
    $.getJSON("/search.json", function(data) {
      $.each(data, function(index, item) {
        if (item.excerpt.toLowerCase().indexOf(q.toLowerCase()) > -1 || item.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          $list.append('<li class="search-result"><a href="'+item.link+'">'+item.title+'</a></li>')
          res_count++;
        }
      });
      $count.text(res_count + ' matching posts');
    });
  }
}
$("#search-post").on("change", do_search_post);
$("#do-search-post").click(do_search_post);