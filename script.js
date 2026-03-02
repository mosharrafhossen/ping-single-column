


const form = document.getElementById("form");
const input = document.querySelector("input");

form.addEventListener("submit", function(e){
  e.preventDefault();

  if(!validateEmail(input.value.trim())){
    showError();
  } else {
    removeError();
  }
});

function showError(){
  input.classList.add("error");
  document.querySelector("small").style.display = "block";
}

function removeError(){
  input.classList.remove("error");
  document.querySelector("small").style.display = "none";
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

