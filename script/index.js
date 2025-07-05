document.addEventListener("DOMContentLoaded", () => initApp());

// window.addEventListener("load", () => initApp());

const initApp = async () => {
  const rightNav = document.querySelector(".right_nav");
  const leftNav = document.querySelector(".left_nav");
  const homeCnt = document.querySelector(".home");

  setTimeout(() => {
    [rightNav, leftNav, homeCnt].forEach((item) => item.classList.add("active"));
  }, 100);

  let isMainFlg = true;
  const bodyTag = document.querySelector("body");
  const mainCtrl = (bool) => {
    isMainFlg = bool;
    if (isMainFlg) bodyTag.classList.add("is_main");
    else bodyTag.classList.remove("is_main");
  };

  const navBtn = document.querySelectorAll(".right_nav button");
  const navBtnArr = Array.from(document.querySelectorAll(".right_nav li"));
  const sectionArr = Array.from(document.querySelectorAll(".contents section"));
  const leftList = Array.from(document.querySelectorAll(".left_nav .nav_ul li"));
  navBtn.forEach((item) => {
    item.addEventListener("click", function () {
      const idx = navBtnArr.indexOf(this.parentElement);
      navBtnArr.forEach((btn) => btn.classList.remove("active"));
      sectionArr.forEach((sec) => sec.classList.remove("active"));
      leftList.forEach((tit) => tit.classList.remove("active"));

      leftNav.classList.remove("active");
      this.parentElement.classList.add("active");
      if (idx > 0) {
        mainCtrl(false);
        leftList[idx - 1].classList.add("active");
      } else mainCtrl(true);

      setTimeout(() => {
        leftNav.classList.add("active");
        sectionArr[idx].classList.add("active");
      }, 500);
    });
  });

  const gallBtn = document.querySelectorAll(".gallery_list .open");
  const gallClsBtn = document.querySelectorAll(".frame .close");
  const popup = document.querySelector(".frame .popup");
  const popImg = document.querySelector(".frame .popup img");
  gallBtn.forEach((item) => {
    item.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      popImg.setAttribute("src", imgSrc);
      popup.classList.add("active");
    });
  });

  gallClsBtn.forEach((item) => {
    item.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  });
};
