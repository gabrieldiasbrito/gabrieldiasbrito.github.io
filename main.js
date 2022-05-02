$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 450){
            $(".link").addClass("sticky")
            $(".logo").addClass("sticky")
            $(".checkbtn").addClass("sticky")
            $(".nav").addClass("sticky")
            $(".ul").addClass("sticky")
        }else{
            $(".link").removeClass("sticky")
            $(".logo").removeClass("sticky")
            $(".checkbtn").removeClass("sticky")
            $(".nav").removeClass("sticky")
            $(".ul").removeClass("sticky")
        }
    })
})

const skillsContent = document.getElementsByClassName("skills-content")
      skillsHeader = document.querySelectorAll(".skills-header")

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills-content skills-close"
    }
    if(itemClass === "skills-content skills-close"){
        this.parentNode.className = "skills-content skills-open"
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)
});


const form = document.querySelector(".contato-form");

function enviaMsg(e){
    e.preventDefault()
    const name = document.querySelector(".name"),
        email = document.querySelector(".email"),
        msg = document.querySelector(".mensagem")

    Email.send({
        SecureToken : "a690d785-da99-40f2-9283-95b7d96595f7",
        To : 'gabrieldarochadiasbrito@gmail.com',
        From : email.value,
        Subject : "Contato Portfolio de: " +name.value,
        Body : msg.value
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", enviaMsg);