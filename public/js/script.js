var reviewSlider = document.querySelector("#reviewSlider");
if (reviewSlider != null) {
  var rvSlider = new Splide("#reviewSlider", {
    perPage: 3,
    arrows: false,
    pagination: true,
    breakpoints: {
      640: {
        perPage: 2,
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
