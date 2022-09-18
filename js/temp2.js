let anglLeft = document.querySelectorAll("i.change-background");
let landing = document.querySelectorAll(".landing");
anglLeft[0].onclick = function () {
  //   pp[i].style.backgroundColor = "#fff";
  landing[0].style.cssText = "background-color: red";
};
anglLeft[1].onclick = function () {
    //   pp[i].style.backgroundColor = "#fff";
    landing[0].style.cssText = "background-color: 1f2021";
  };
console.log(anglLeft[0]);
