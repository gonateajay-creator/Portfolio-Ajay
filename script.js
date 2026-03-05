// Typing Animation
const text = "Software Testing Engineer";
let i=0;
function typing(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();

// Skills Accordion
const skills=document.querySelectorAll(".skill");
skills.forEach(skill=>{
  skill.querySelector(".skill-header").onclick=()=>{
    skills.forEach(s=>{if(s!==skill){s.classList.remove("active");s.querySelector(".progress").style.width="0"}});
    skill.classList.toggle("active");
    const bar=skill.querySelector(".progress");
    if(skill.classList.contains("active")){
      bar.style.width=bar.dataset.width;
    }else{bar.style.width="0"}
  }
});