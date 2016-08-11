
function select_tag() {
  var query = window.location.hash.slice(1);
  if(query) {
    $("ul.tags li a").each(function(index, el) {
      var $tag = $(el);
      if($tag.text() === query){
        $tag.addClass('active');
        filter_tags();
        return false;
      }
    });
  } else {
    clear_filters();
  }
}
function clear_filters() {
  $("ul.tags li a").removeClass('active');
  filter_tags();
}

function filter_tags() {
    var sel_tags = [];
    $("ul.tags li a").each(function(index, el) {
      var $tag = $(el);
      if($tag.hasClass('active')){
        sel_tags.push($tag.text());
      }
    });
    if(sel_tags.length > 0){
      $(".clear-filters").show();
    } else {
      $(".clear-filters").hide();
    }
    $(".post-list li").each(function(index, el) {
      var $post = $(el);
      var tags = $post.find('.tag-list').text().trim().split(', ');
      var matches = 0;
      for(var i in sel_tags){
        if(tags.indexOf(sel_tags[i]) >= 0) {
          matches++;
        }
      }
      if(matches == sel_tags.length){
        $post.fadeIn();
      } else {
        $post.fadeOut();
      }

    });
}
$(window).on('hashchange', select_tag);
$(select_tag);
$('ul.tags').click(function(event) {
  event.preventDefault();
  var $tag = $(event.target);
  $tag.toggleClass('active');
  filter_tags();
});

$(".clear-filters").click(clear_filters);