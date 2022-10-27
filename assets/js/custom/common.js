const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

$(document).ready(function () {
  // count up started
  $(".count").each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.attr("data-stop") },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $this.text(Math.ceil(now));
        },
      }
    );
  });
  // count up ended

  // services started

  $(".acc-container .acc:nth-child(1) .acc-head").addClass("active");
  $(".acc-container .acc:nth-child(1) .acc-content").slideDown();
  $(".acc-head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".acc-content").slideUp();
      $(this).removeClass("active");
    } else {
      $(".acc-content").slideUp();
      $(".acc-head").removeClass("active");
      $(this).siblings(".acc-content").slideToggle();
      $(this).toggleClass("active");
    }
  });

  // brand logos started
  $(".brand-logos").slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    autoplay: true,
    arrows: false,
    speed: 8000,

    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  // brand logos ended

  // location started
  $(".main-iso").isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
  });

  $(".iso-nav ul li").click(function () {
    //ACTIVE CLASS
    $(".iso-nav ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".main-iso").isotope({
      filter: selector,
    });
    return false;
  });

  // location ended
});
