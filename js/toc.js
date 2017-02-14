$(function() {
  var toc = $("#post-toc .post-links");
  $("article .content").children().filter("h1,h2").each(function(i) {
    var el = "<li class='" + ($(this).is("h2") ? "lvl2" : "lvl1") + "'>"
    toc.append(el + "<a href='#" + $(this).attr("id") + "'>" + $(this).text() + "</a>");
  });


  var $post_anchor = $('#post-toc-anchor');
  var $post_toc = $('#post-toc');
  var $aside = $post_toc.siblings("aside").first();

  function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $post_anchor.offset().top;
      if (window_top > div_top - 20) {
          $post_toc.width($aside.width());
          $post_toc.addClass('stick');
          $post_anchor.height($post_toc.outerHeight());
      } else {
          $post_toc.removeClass('stick');
          $post_toc.width("auto");
          $post_anchor.height(0);
      }
  }

  $(window).scroll(sticky_relocate);
  $(window).resize(function() {$post_toc.width($aside.width());});
  sticky_relocate();

});