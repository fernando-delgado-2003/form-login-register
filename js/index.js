const screenForm =(btn,wrapBtn)=>{
    let login = document.getElementsByClassName("login")[0],
        register = document.getElementsByClassName("register")[0];
        btn != "facebook" ? wrapBtn.style.display="none": "";
   switch (btn) {
        case 'login':
                register.classList.remove("active")
                login.classList.add("active");
            break;
        case 'register':
            login.classList.remove("active");
            register.classList.add("active")
            break;
        case 'facebook':
            const messageFacebook = document.querySelector(".facebook span");
            messageFacebook.classList.add("active");
            setTimeout(()=>{
                messageFacebook.classList.remove("active")
            }, 1500)
            break;
        
        
   } 
}

const app = () => {

    const btnsNavForm = document.querySelectorAll(".nav-form button"),
        wrapBtn = document.querySelector(".options");

    btnsNavForm.forEach((elem, i, list) => {
        elem.addEventListener("click", (e) => {
            const navForm = document.querySelector(".nav-form");
            if (!navForm.classList.contains("active") && e.target.dataset.name != "facebook") {
                navForm.classList.add("active")
                list[3].style.opacity = "1";
                list[3].addEventListener("click", () => {
                    list[3].style.opacity = "0";
                    wrapBtn.style.display="flex";
                    navForm.classList.remove("active");
                })


            }

            screenForm(e.target.dataset.name, wrapBtn)
        })
    })
}

app()