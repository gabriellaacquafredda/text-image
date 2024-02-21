// initial vertical scroll
window.onload = function() {
  var scrollHeight = document.body.scrollHeight;
  var halfway = scrollHeight / 5;
  var scrollStep = halfway / 100; 

  var scrollInterval = setInterval(function() {
      if (window.scrollY < halfway) {
          window.scrollBy(0, scrollStep);
          // window.scrollBy(-5, 0);
          // horizontal scroll buggy
      } else {
          clearInterval(scrollInterval);
          window.scrollBy(-5, 0);
      }
  }, 1); 
};

// gen
let totalRevealed = 0;

// hover to reveal
const hoverDivs = document.querySelectorAll('.hov-div , .hov-div2 , .hov-div3 , .hov-div4 , .hov-div5 , .hov-div6 , .hov-div7 , .hov-div8 , hov-div9 , .hov-div10 , .hov-div11 , .hov-div12 , .hov-div13 , .hov-div14 , .hov-div15 , .hov-div16 , .hov-div17, .hov-div18, .hov-div19, .hov-div20, .hov-div21, .hov-div22, .hov-div23, .hov-div24, .hov-div24, .hov-div25, .hov-div26, .hov-div27, .hov-div28, .hov-div29, .hov-div30, .hov-div31, .hov-div32, .hov-div33, .hov-div34, .hov-div35, .hov-div36, .hov-div37, .hov-div38');
console.log(hoverDivs);

hoverDivs.forEach(function(hoverDiv) {
  let hasRevealed = false;  

  hoverDiv.addEventListener('mouseenter', function() {
    hoverDiv.classList.add('show-text');
    
    if (hasRevealed === false) {
      totalRevealed++;
      hasRevealed = true;
    }
  });

});