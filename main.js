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