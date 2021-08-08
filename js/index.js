const screenForm = (btn, place, wrapBtn) => {
  let login = document.getElementsByClassName("login")[0],
    register = document.getElementsByClassName("register")[0];
  btn != "facebook" ? (wrapBtn[1].style.display = "none") : "",
  classCss = place == "nav-form" ? "active" : "active-move";
  switch (btn) {
    case "login":
      register.classList.remove(classCss);
      login.classList.add(classCss);
      break;
    case "register":
      login.classList.remove(classCss);
      register.classList.add(classCss);
      break;
    case "facebook":
      const messageFacebook = document.querySelector(".facebook span");
      messageFacebook.classList.add("active");
      setTimeout(() => {
        messageFacebook.classList.remove("active");
      }, 1500);
      break;
  }
};

const app = () => {
  const btnsNavForm = document.querySelectorAll(".btn"),
    wrapBtn = document.querySelectorAll(".options");
console.log(btnsNavForm)
  btnsNavForm.forEach((elem, i, list) => {
    elem.addEventListener("click", (e) => {
      if (document.getElementById("nav-form-form")) {
        const navForm = document.querySelector(".nav-form");
        if (
          !navForm.classList.contains("active") &&
          e.target.dataset.name != "facebook"
        ) {
          navForm.classList.add("active");
          list[5].style.opacity = "1";
          list[5].addEventListener("click", () => {
            list[5].style.opacity = "0";
            wrapBtn[1].style.display = "flex";
            navForm.classList.remove("active");
          });
        }
        console.log(e.target.dataset)
        screenForm(e.target.dataset.name, e.target.dataset.place, wrapBtn);
      }
    });
  });
};

app();
