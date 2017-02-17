/**
 * Created by 4y6aka on 16.02.2017.
 */
var link = document.querySelector(".index-btn");
var popup = document.querySelector(".index-modal");
var checkin = popup.querySelector(".check-in");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("index-modal-hide");
  checkin.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!popup.classList.contains("index-modal-hide")) {
      popup.classList.add("index-modal-hide");
    }
  }
});
