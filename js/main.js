const basketStarterEl = document.querySelector("header .basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

basketStarterEl.addEventListener("click", (event) => {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});

basketEl.addEventListener("click", (event) => {
  // basketEl 영역을 클릭했을 때는 basketEl이 사라지지 않게 이벤트 버블링을 막는다.
  event.stopPropagation();
});

// basketEl 이외의 다른 영역을 클릭하면 basketEl이 사라지게 하기 위해 이벤트 리스너를 등록한다.
window.addEventListener("click", () => {
  hideBasket();
});

function showBasket() {
  basketEl.classList.add("show");
}

function hideBasket() {
  basketEl.classList.remove("show");
}
