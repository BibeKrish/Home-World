$(".bar").click(function () {
  $(".main-menu").slideDown();
  $(".cross").show();
  $(".bar").hide();
});
$(".cross").click(function () {
  $(".main-menu").slideUp();
  $(".cross").hide();
  $(".bar").show();
});
$(".plus").click(function () {
  $(".sub-menu").slideDown();
  $(".minus").show();
  $(".plus").hide();
});
$(".minus").click(function () {
  $(".sub-menu").slideUp();
  $(".minus").hide();
  $(".plus").show();
});
$(".property-slider").owlCarousel({
  loop: true,
  dots: false,
  navText: [
    '<span><i class="fa-solid fa-angle-left"></i></span>',
    '<span><i class="fa-solid fa-angle-right"></i></span>',
  ],
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
});

$(".news-slider").owlCarousel({
  loop: true,
  dots: false,
  navText: [
    '<span><i class="fa-solid fa-angle-left"></i></span>',
    '<span><i class="fa-solid fa-angle-right"></i></span>',
  ],
  margin: 0,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: true,
      loop: true,
    },
  },
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 750) {
    $(".scroll").show();
  } else {
    $(".scroll").hide();
  }
});

$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

setTimeout(function () {
  $(".market").html(2300);
});
setTimeout(function () {
  $(".estate").html(60);
});
