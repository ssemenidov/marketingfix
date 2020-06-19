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
