const image_1 = document.getElementById("image_1");
const image_2 = document.getElementById("image_2");
const image_3 = document.getElementById("image_3");
const image_4 = document.getElementById("image_4");
const coursal = document.getElementById("coursal");
function done() {
  image_1.style.zIndex = 0;
  image_2.style.right = 0 + "px";
  console.log("done");
}
coursal.addEventListener("mouseenter", function () {
    image_1.style.zIndex=0;
  image_2.style.right = 0 + "px";
  image_2.style.transition = 2 + "s";
  const a = setTimeout(() => {
    // console.log("two done");
    image_3.style.zIndex = 2;
    image_3.style.right = 0 + "px";
    image_3.style.transition = 2 + "s";
        const aa = setTimeout(() => {
            // console.log("three done");
            image_4.style.zIndex = 3;
            image_4.style.right = 0 + "px";
            image_4.style.transition = 2 + "s";
        }, 2000);
  }, 2000);

//   coursal.style.border = "1px solid pink";
});
coursal.addEventListener("mouseleave", function () {
  image_1.style.left = 0 + "px";
  image_1.style.zIndex=6;
  image_2.style.right = -300 + "px";
  image_3.style.right = -300 + "px";
  image_4.style.right = -300 + "px";
//   coursal.style.border = "1px solid black";
});
