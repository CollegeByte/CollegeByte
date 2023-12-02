const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose"),
  pyqbtn = document.querySelector(".get-pyq"),

  pyqbox = document.querySelector(".pyq-box"),
  ebookbox = document.querySelector(".ebook-box"),
  ebookbtn = document.querySelector(".get-ebook"),
  ebookBody = document.querySelector(".ebook-body"),
  downArrow = document.querySelectorAll(".ebook"),
  main = document.querySelector(".main"),
  loader = document.querySelector(".loader-animation"),
  notesBtn = document.querySelector(".get-notes");


let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");

});

body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");

  }
});

//get pyq 
ebookbtn.addEventListener("click", () => {
  ebookbox.style.display = "block";
});

pyqbtn.addEventListener("click", () => {
  pyqbox.style.display = "block";
});

//dropdown arrow rotate and display ebook body 
downArrow.forEach(ele =>{
  ele.addEventListener("click", e => {
    let clickedElm = ele.children[0].children[1] ;
    let eBookBody = ele.children[1];
    if (!clickedElm.classList.contains("fa-rotate-180")) {
      eBookBody.style.display = "block";
      clickedElm.classList.add("fa-rotate-180");
    }
  
    else {
      eBookBody.style.display = "none";
      clickedElm.classList.remove("fa-rotate-180");
    }
  });
})

//loader animation 
function loaderAnimation() {
  loader.style.display = "none";
  main.style.display = "block";
}
setInterval(loaderAnimation, 3000);

//get notes alert 
notesBtn.addEventListener("click", () => {
  alert("Coming soon ");
});