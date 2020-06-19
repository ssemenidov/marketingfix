//work
workbtnList = document.querySelectorAll(".bar-point-btn");
workList = document.querySelectorAll(".work-text");
worknext = document.querySelector(".work-next");
workprev = document.querySelector(".work-prev");
workActive = 0;

//work-point
function updateworkpoint(active) {
  workbtnList[workActive].classList.remove("bar-point-btn--active");
  workList[workActive].classList.add("hidden");

  workActive = active;
  workbtnList[workActive].classList.add("bar-point-btn--active");
  workList[workActive].classList.remove("hidden");
}
for (let i = 0; i < workbtnList.length; i++) {
  workbtnList[i].addEventListener("click", () => {
    updateworkpoint(i);
  });
}
//work-arrows
worknext.addEventListener("click", () => {
  if (workActive < workbtnList.length - 1) {
    updateworkpoint(workActive + 1);
  }
});

workprev.addEventListener("click", () => {
  if (workActive > 0) {
    updateworkpoint(workActive - 1);
  }
});

targetbtnList = document.querySelectorAll(".target-menu-item");
targetList = document.querySelectorAll(".target-item");
//targetnext = document.querySelector(".target-next");
//targetprev = document.querySelector(".target-prev");
targetActive = 0;

//work-point
function updatetargetpoint(active) {
  targetbtnList[targetActive].classList.remove("target-menu-item--active");
  targetList[targetActive].classList.add("hidden");

  targetActive = active;
  targetbtnList[targetActive].classList.add("target-menu-item--active");
  targetList[targetActive].classList.remove("hidden");
}
for (let i = 0; i < targetbtnList.length; i++) {
  targetbtnList[i].addEventListener("click", () => {
    updatetargetpoint(i);
  });
}
$(document).ready(function () {
  $(".target-slider").slick({
    infinite: false,
  });
});

burger = document.querySelector(".burg");
header = document.querySelector(".header-mob");
burger.addEventListener("click", () => {
  console.log("active");

  header.classList.toggle("header-mob--active");
});
