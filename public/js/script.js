var lightboxVideo = GLightbox({
  selector: '.glightbox3'
});

var reviewSlider = document.querySelector("#reviewSlider");
if (reviewSlider != null) {
  var rvSlider = new Splide("#reviewSlider", {
    perPage: 3,
    arrows: false,
    pagination: true,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  }).mount();
}

var studySlider = document.querySelector("#studySliderBox");
if (studySlider != null) {
  var stdSlider = new Splide("#studySliderBox", {
    perPage: 3,
    arrows: true,
    pagination: false,
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();
}

// Free Trial Modal
var freeTrial = document.querySelector("#freeTrial");
if (freeTrial != null) {
  var modal = document.getElementById("freeTrial");
  var btn = document.getElementById("abrModalBtn");

  btn.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
  };

  window.onclick = function (event) {
    if (
      event.target != modal &&
      !modal.contains(event.target) &&
      event.target != btn
    ) {
      modal.style.display = "none";
    }
  };
}


document.body.classList.remove('sidebar-open')
var body = document.querySelector('body')
document.querySelector('.side-close').onclick = function () {
  body.classList.remove('sidebar-open')
}

document.querySelector('.mobile-tap').onclick = function () {
  body.classList.add('sidebar-open')
}

document.querySelector('.menu .plus').onclick = function () {
  this.parentNode.nextSibling.classList.toggle('show-sub')
}

var mobile_expand = document.querySelectorAll('.mobile-navigation .is-parent')

mobile_expand.forEach((item, index) => {
  let _parent = item.querySelector(".plus");
  _parent.onclick = function () {
    this.parentNode.nextSibling.classList.toggle('show-sub')
  }

})

function show_logo(e) {
  e.nextElementSibling.classList.toggle("visible");
  var body = document.body;
  body.classList.toggle("blur");
}

function hide_logo(e) {
  [].forEach.call(document.querySelectorAll('.ab-hidden'), function (el) {
    el.classList.remove('visible');
  });

  var body = document.body;
  body.classList.toggle("blur");
}

