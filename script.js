const menuToggle = document.querySelector(".toggle");
  const itemList = document.querySelectorAll(".item");
  const menu = document.querySelector(".menu");


//toggle active class when click
menuToggle.addEventListener("click", () =>{
    for (let i = 0; i < itemList.length; i++) {
        itemList[i].classList.toggle('active');
      }
      
});

//remove active class when screen resize
function viewForm(){
  let winWidth = window.innerWidth;
  if (winWidth >= 768 ) {
    for (let i = 0; i < itemList.length; i++) {
      itemList[i].classList.remove('active');
    }
  }
  // console.log(winWidth)
};
window.onresize = viewForm;
