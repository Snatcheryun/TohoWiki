window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector(".top-container")
        .classList.add("mostrar");
    } else {
        document.querySelector(".top-container")
        .classList.remove("mostrar");
    }
}

document.querySelector(".top-container")
.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    })
})

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

btnRight.addEventListener("click", function(){
    Next(); 
});

btnLeft.addEventListener("click", function(){
    Prev(); 
});

setInterval(function(){
    Next();
}, 3000)