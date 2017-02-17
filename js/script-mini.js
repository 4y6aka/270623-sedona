/**
 * Created by 4y6aka on 16.02.2017.
 */
var link=document.querySelector(".index-btn"),popup=document.querySelector(".index-modal"),checkin=popup.querySelector(".check-in");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("index-modal-hide"),checkin.focus()}),window.addEventListener("keydown",function(e){27===e.keyCode&&(popup.classList.contains("index-modal-hide")||popup.classList.add("index-modal-hide"))});
