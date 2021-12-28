document.getElementById("xyz").style.background="Blue";

let acb=document.getElementById("abc");
abc.addEventListener("mouseout", function run(){

  abc.style.color="yellow"
  abc.style.fontSize="50px"

  setTimeout(() => {
      abc.style.color=""
    abc.style.fontSize=""
    },1000);
});