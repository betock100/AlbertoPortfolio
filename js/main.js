document.addEventListener("DOMContentLoaded", () => {

  const twoSquares = document.querySelector(".twoSquares");

  //1000px min screen height

  if (window.innerHeight >=1000) {
    twoSquares.querySelector(".squareL").style.animationPlayState = "running";
    twoSquares.querySelector(".squareR").style.animationPlayState = "running";

  } else { 
    //smaller screens
    document.addEventListener("scroll", () => {
        const twoSquares = document.querySelector(".twoSquares");
        const rect = twoSquares.getBoundingClientRect();
      
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          twoSquares.querySelector(".squareL").style.animationPlayState = "running";
          twoSquares.querySelector(".squareR").style.animationPlayState = "running";
        }

    });

  }
  
})