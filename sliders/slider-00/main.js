const nextBtn=document.querySelector(".next");
const prevBtn=document.querySelector(".prev");
 const listDom=document.querySelector(".carousel .list");
 const thumbnailsDom=document.querySelector(".carousel .thumbnails");

nextBtn.onclick=function nextImage(){
    let itemSlider=document.querySelectorAll(".carousel .list .item");  
    let thumbnailItem=document.querySelectorAll(".carousel  .thumbnail");

    listDom.appendChild(itemSlider[0]);
    thumbnailsDom.appendChild(thumbnailItem[0]);

}
console.log("hello")