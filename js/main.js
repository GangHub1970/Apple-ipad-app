// 장바구니
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

// 검색
const headerEl = document.querySelector("header");
const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];

searchStarterEl.addEventListener("click", showSearch);

searchCloserEl.addEventListener("click", hideSearch);

searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
  headerEl.classList.add("searching");
  // html 태그 요소를 선택하려면 document.documentElement를 사용한다.
  document.documentElement.classList.add("fixed");

  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });

  searchDelayEls.forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / searchDelayEls.length}s`;
  });

  // input요소가 0.6초 이후에 나타나도록 애니메이션을 주었기 때문에 0.6초 뒤에 focus되도록 해준다.
  setTimeout(() => {
    searchInputEl.focus();
  }, 600);
}

function hideSearch() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");

  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / headerMenuEls.length}s`;
  });

  searchDelayEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${(index * 0.4) / searchDelayEls.length}s`;
  });
  searchDelayEls.reverse();

  // 검색창이 닫힐 때 검색창을 초기화해준다.
  searchInputEl.value = "";
}
