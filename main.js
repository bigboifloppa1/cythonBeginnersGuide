content = document.querySelector(".content");
button = document.querySelector(".readmore");
cython = document.querySelector(".cython");
block = document.querySelector(".block");
getstarted = document.querySelector(".getstarted")

readmore = () => {
  setTimeout(function() {
    content.style.display = "inline";
  },100)
  content.style.animation = "fontSize 1.5s ease-in-out 1";
  button.style.display = "none";
  cython.style.animation = "height1 1.5s ease-in-out 1";
  cython.style.animationDelay = "10ms";
  content.style.animationDelay = "-50ms";
  
  setTimeout(function() {
    cython.style.height = "390px";
  },1730)
}

//getstarted = () => {
getstarted.addEventListener("click", () => {
  block.style.animation = "popup 300ms ease 1";
  setTimeout(() => {
    block.style.width = "100vw"
    block.style.height = "100vh"
    block.style.left = "0"
    block.style.top = "0"
    block.style.zIndex = "1"
    block.style.display = "inline"
    block.style.background = "#464646"
    block.style.content = "lol"
  }, 300)
  setTimeout(function() {
    block.style.removeProperty("animation");
    window.location.href = "cythonTut.html"
  }, 500)
});
