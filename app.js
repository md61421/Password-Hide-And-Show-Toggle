let eyeIcon = document.querySelector("#eyeicon");
let password = document.querySelector("#password");

eyeIcon.onclick = () => {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "./image/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "./image/eye-close.png";
  }
};
