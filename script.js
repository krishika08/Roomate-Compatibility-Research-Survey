const sections=document.querySelectorAll(".section");
const nextBtns=document.querySelectorAll(".next-btn");
const prevBtns=document.querySelectorAll(".prev-btn");
const progressBar=document.getElementById("progressBar");
const form=document.getElementById("surveyForm");
const thankYou=document.getElementById("thankYou");

let current=0;
let submitted=false;

function showSection(index){
  sections.forEach(sec=>sec.classList.remove("active"));
  sections[index].classList.add("active");
  progressBar.style.width=((index+1)/sections.length)*100+"%";
}

nextBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(current<sections.length-1){
      current++;
      showSection(current);
    }
  });
});

prevBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(current>0){
      current--;
      showSection(current);
    }
  });
});

document.querySelector("iframe").addEventListener("load",()=>{
  if(submitted){
    form.style.display="none";
    thankYou.classList.remove("hidden");
  }
});

form.addEventListener("submit",()=>{
  submitted=true;
});
