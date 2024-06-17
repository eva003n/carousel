let  nextBtn=document.querySelector(".next");
let prevBtn=document.querySelector(".prev");
let  carouselDom=document.querySelector(".carousel")
let listDom=document.querySelector(".carousel .list");
let thumbnailsDom=document.querySelector(".carousel .thumbnails");

nextBtn.onclick=()=>{
    nextImage("next")
}
function nextImage(type){
    let itemSlider=document.querySelectorAll(".carousel .list .item");  
    let thumbnailItem=document.querySelectorAll(".carousel  .thumbnail");
    if(type==="next"){
    listDom.appendChild(itemSlider[0]);
    thumbnailsDom.appendChild(thumbnailItem[0]);
    carouselDom.classList.add("next")
}
}
