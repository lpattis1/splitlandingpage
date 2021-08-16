const rightSide = document.querySelector(".right");
const leftSide = document.querySelector(".left");
const container = document.querySelector(".container");

function showAndHideLeftSide() {
  leftSide.addEventListener("mouseenter", function (e) {
    container.classList.add("hover-left");
  });

  leftSide.addEventListener("mouseleave", function (e) {
    container.classList.remove("hover-left");
  });
}

showAndHideLeftSide();

function showAndHideRightSide() {
  rightSide.addEventListener("mouseenter", function (e) {
    container.classList.add("hover-right");
  });

  rightSide.addEventListener("mouseleave", function (e) {
    container.classList.remove("hover-right");
  });
}

showAndHideRightSide();
