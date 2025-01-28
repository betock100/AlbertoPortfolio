document.addEventListener("DOMContentLoaded", () => {

  const twoSquaresList = document.querySelectorAll(".twoSquares");

  //1000px min screen height
  if (window.innerHeight >=1000) {
    twoSquaresList.forEach((twoSquares) => {
      twoSquares.querySelector(".squareL").style.animationPlayState = "running";
      twoSquares.querySelector(".squareR").style.animationPlayState = "running";

    });    

  } else { 
    //smaller screens
    document.addEventListener("scroll", () => {
      twoSquaresList.forEach((twoSquares) => {
        //const twoSquares = document.querySelector(".twoSquares");
        const rect = twoSquares.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          twoSquares.querySelector(".squareL").style.animationPlayState = "running";
          twoSquares.querySelector(".squareR").style.animationPlayState = "running";
        }

      });
    });
  }  
});