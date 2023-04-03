// footer

const footer_res_dropdown_icon1=()=>{
    document.getElementById("navbar-droupdown-menu").style.display="block";
    document.getElementById("footer-droupdown-down").style.display="none";
    document.getElementById("footer-droupdown-up").style.display="block";
}

const footer_res_dropdown_icon1_1=()=>{
    
    document.getElementById("navbar-droupdown-menu").style.display="none";
    document.getElementById("footer-droupdown-down").style.display="block";
    document.getElementById("footer-droupdown-up").style.display="none";
    
    
}

const footer_res_dropdown_icon2=()=>{
    document.getElementById("navbar-droupdown-menu2").style.display="block";
    document.getElementById("footer-droupdown-down2").style.display="none";
    document.getElementById("footer-droupdown-up2").style.display="block";
}

const footer_res_dropdown_icon2_1=()=>{ 
    document.getElementById("navbar-droupdown-menu2").style.display="none";
    document.getElementById("footer-droupdown-down2").style.display="block";
    document.getElementById("footer-droupdown-up2").style.display="none";
    
    
}
 const footer_res_dropdown_icon3=()=>{
     document.getElementById("navbar-droupdown-menu3").style.display="block";
     document.getElementById("footer-droupdown-down3").style.display="none";
     document.getElementById("footer-droupdown-up3").style.display="block";}
 
 const footer_res_dropdown_icon3_1=()=>{  
     document.getElementById("navbar-droupdown-menu3").style.display="none";
     document.getElementById("footer-droupdown-down3").style.display="block";
     document.getElementById("footer-droupdown-up3").style.display="none";    
 }

const footer_res_dropdown_icon4=()=>{
    document.getElementById("navbar-droupdown-menu4").style.display="block";
    document.getElementById("footer-droupdown-down4").style.display="none";
    document.getElementById("footer-droupdown-up4").style.display="block";
}

const footer_res_dropdown_icon4_1=()=>{
    
    document.getElementById("navbar-droupdown-menu4").style.display="none";
    document.getElementById("footer-droupdown-down4").style.display="block";
    document.getElementById("footer-droupdown-up4").style.display="none";
    
    
}

 const footer_res_dropdown_icon5=()=>{
    document.getElementById("navbar-droupdown-menu5").style.display="block";
    document.getElementById("footer-droupdown-down5").style.display="none";
    document.getElementById("footer-droupdown-up5").style.display="block";
}

const footer_res_dropdown_icon5_1=()=>{
    
    document.getElementById("navbar-droupdown-menu5").style.display="none";
    document.getElementById("footer-droupdown-down5").style.display="block";
    document.getElementById("footer-droupdown-up5").style.display="none";
    
    
}

const footer_res_dropdown_icon6=()=>{
    document.getElementById("navbar-droupdown-menu6").style.display="block";
    document.getElementById("footer-droupdown-down6").style.display="none";
    document.getElementById("footer-droupdown-up6").style.display="block";
}

const footer_res_dropdown_icon6_1=()=>{
    
    document.getElementById("navbar-droupdown-menu6").style.display="none";
    document.getElementById("footer-droupdown-down6").style.display="block";
    document.getElementById("footer-droupdown-up6").style.display="none";
    
    
}

// footer

// play video

const play_video_down_close=()=>{
    document.getElementById("play_video_dropdown").style.display="block";
    document.getElementById("play_video_up").style.display="block";
    document.getElementById("play_video_down").style.display="none";
}


const play_video_up_close=()=>{
    document.getElementById("play_video_dropdown").style.display="none";
    document.getElementById("play_video_up").style.display="none";
    document.getElementById("play_video_down").style.display="block";
}
// play video


// img more

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

    const dragging = (e) => {
        // scrolling images/carousel to left according to mouse pointer
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");

        if(!isDragging) return;
        isDragging = false;
        autoSlide();
    }

 carousel.addEventListener("mousedown", dragStart);
 carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging); carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);carousel.addEventListener("touchend", dragStop);


//  img slider code java ?
 function picture_slider(){
     setInterval( switch_picture, 2000 ); // corrected removing "()"
 }

var bild = document.getElementById("bild")
var i = 0; // Start from image 0.jpg

 function switch_picture() { // don't iterate a loop in here!
   bild.src = "bilder/"+ (i++ % 7) +".jpg";
}




//Source: https://stackoverflow.com/questions/28614500


const slider = document.getElementById("slider");
let currentIndex = 0;

function showNextImage() {
  slider.children[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % slider.children.length;
  slider.children[currentIndex].style.display = "block";
}
