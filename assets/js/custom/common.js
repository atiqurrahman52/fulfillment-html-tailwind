const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Application Process FAQ Started
let accordions = document.querySelectorAll(".accordion");

accordions.forEach((acco) => {
  accordions[0].click();
  accordions[0].click();
  acco.onclick = () => {
    accordions.forEach((subAcco) => {
      subAcco.classList.remove("active");
    });
    acco.classList.add("active");
  };
});
// Application Process FAQ Ended

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

// all Locationfilter started
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".item");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");
    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "usa"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}
