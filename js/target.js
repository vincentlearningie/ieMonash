document.querySelector(".clear-tasks").addEventListener("click", onClick);
function onClick(e) {
  let val;
  val = e;

  //   Event target element

  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  val = e.timeStamp;
  val = e.clientY;
  val = e.clientX;

  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}
