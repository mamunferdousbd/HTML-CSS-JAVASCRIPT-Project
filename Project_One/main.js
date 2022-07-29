const slideshoeElements = document.querySelectorAll(".slideshow_element");

let countElement = 1;

setInterval(() => {
    countElement++;
    const currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if (countElement > slideshoeElements.length) {
        slideshoeElements[0].classList.add("current");
        countElement = 1;
    } else {
        currentElement.nextElementSibling.classList.add("current")
    }

}, 2000);