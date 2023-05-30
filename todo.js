let inputBox = document.getElementById("inputc");
let button = document.getElementById("button");
let ex = document.getElementById("ex");
let all = document.getElementById("all");
let dbutton = document.getElementById("dbutton");

button.addEventListener("click", function () {
  let list = document.createElement("li");
  if (!inputBox.value) {
    alert("내용 입력 없음");
  } else {
    list.innerText = inputBox.value;
    ex.appendChild(list);
    inputBox.value = "";

    list.addEventListener("click", function () {
      if (list.style.textDecoration == "")
        list.style.textDecoration = "line-through";
      else list.style.textDecoration = "";
    });

    list.addEventListener("dblclick", function () {
      list.parentNode.removeChild(list);
    });
  }
});

dbutton.addEventListener("click", function () {
  while (ex.firstChild) {
    ex.removeChild(ex.firstChild);
  }
});

