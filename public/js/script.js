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
    nextArrow: ".target-next",
    prevArrow: ".target-prev",
  });
});
var phoneMask = IMask(document.querySelector(".form-input"), {
  mask: "+{7} (000) 000-00-00",
});
burger = document.querySelector(".burg");
header = document.querySelector(".header-mob");
navList = document.querySelectorAll(".header-mob .menu-item");

callList = document.querySelectorAll(".contact-btn");
servicecallList = document.querySelectorAll(".service-btn");
ordercallList = document.querySelectorAll(".order-btn");
form = document.querySelector(".form");
formclose = document.querySelector(".form-close");
formsubmit = document.querySelector(".form-submit");
portfbtn = document.querySelector(".case-hidden-btn");
burger.addEventListener("click", () => {
  header.classList.toggle("header-mob--active");
  burger.classList.toggle("burg--active");
  form.classList.remove("form--active");
  form.classList.remove("form--active-menu");
});
for (navlink of navList) {
  navlink.addEventListener("click", () => {
    header.classList.remove("header-mob--active");
    burger.classList.remove("burg--active");
    form.classList.remove("form--active");
    form.classList.remove("form--active-menu");
  });
}

for (let call of callList) {
  call.addEventListener("click", () => {
    form.classList.add("form--active");
    form.classList.add("form--active-menu");
  });
}
for (let ordercall of ordercallList) {
  ordercall.addEventListener("click", () => {
    form.classList.add("form--active");
  });
}
portfbtn.addEventListener("click", () => {
  form.classList.add("form--active");
});
for (let servicecall of servicecallList) {
  servicecall.addEventListener("click", () => {
    form.classList.add("form--active");
  });
}
formclose.addEventListener("click", () => {
  form.classList.remove("form--active");
});

// formsubmit.addEventListener("click", () => {
//   form.classList.toggle("form--active");
// });

head = document.querySelector(".header-top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    head.classList.add("header-top-fix");
    burger.classList.add("burg-green");
  } else {
    head.classList.remove("header-top-fix");
    burger.classList.remove("burg-green");
  }
});

conf = document.querySelector(".conf");
confclose = document.querySelector(".conf-close");
confopen = document.querySelector(".footer-conf");
confopen.addEventListener("click", () => {
  console.log("open");

  conf.classList.add("conf--active");
});
confclose.addEventListener("click", () => {
  conf.classList.remove("conf--active");
});

const email = document.querySelector(".form-form");
const input = document.querySelector(".form-input");
email.addEventListener("submit", () => {
  const data = {
    tel: input.value,
  };
  fetch("/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
