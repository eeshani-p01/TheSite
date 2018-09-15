var $;

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $("header").css({ "background-color": "#4C4C4C" });
    }
    else {
      $("header").css({ "background-color": "transparent" });
    }

  })
})
