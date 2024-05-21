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