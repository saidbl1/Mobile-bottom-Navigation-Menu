const list = document.querySelectorAll(".list");

function activeLink() {
  // event.preventDefault(); // Prevent the default behavior of anchor tags
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

///////// style 2

const list2 = document.querySelectorAll(".list2");

function activeLink2() {
  list2.forEach((item) => item.classList.remove("active2"));
  console.log("sss");
  this.classList.add("active2");
}

list2.forEach((item) => item.addEventListener("click", activeLink2));
///////// style 2

const list3 = document.querySelectorAll(".list3");

function activeLink3() {
  list3.forEach((item) => item.classList.remove("active3"));
  console.log("sss");
  this.classList.add("active3");
}

list3.forEach((item) => item.addEventListener("click", activeLink3));
