// let obj = {
//     "id": 1,
//     "title": "Python-1",
//     "course": "Python",
//     "pay_monthes": [
//         {
//             "id": 1,
//             "month": 1,
//             "pay_month-1": 200
//         },
//         {
//             "id": 2,
//             "pay_price": 300
//         }
//     ]
// }


// makers.buh.kg / api / v1 / add_new_month_payment /

// {
//     "id_course": 1,
//     "price": 300
// }


const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNavs = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNavs.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideSize);

//todo arrange slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide-btn');
    targetDot.classList.add('current-slide-btn')
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//todo click left move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNavs.querySelector('.current-slide-btn');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

})

//todo click right move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNavs.querySelector('.current-slide-btn');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    // move the slide
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

//todo click nav move to this slide
dotsNavs.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNavs.querySelector('.current-slide-btn');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})


//! new one TEST
// const carousel = document.querySelector('.carousel');
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel_button--right');
// const prevButton = document.querySelector('.carousel_button--left');
// const dotsNavsFirst = document.querySelector('.carousel_nav');
// const dotsNavsSecond = document.querySelector('.second-carousel_nav');
// const dotsFirst = Array.from(dotsNavsFirst.children);
// const dotsSecond = Array.from(dotsNavsSecond.children);
// const dots = dotsFirst.concat(dotsSecond)
// console.log(dots);

// const slideWidth = slides[0].getBoundingClientRect().width;
// // console.log(slideSize);

// //todo arrange slides next to one another
// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// }
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     console.log(track, currentSlide, '++LALA++', targetSlide);
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide')
// }

// const updateDots = (currentDot, targetDot) => {
//     console.log(currentDot, '++HOHO++', targetDot);
//     currentDot.classList.remove('current-slide-btn');
//     targetDot.classList.add('current-slide-btn')
// }

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0) {
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }
// }

// //todo click left move slides to the left
// prevButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = document.querySelector('.current-slide-btn');
//     const realCurrentDot = dots.find(dot => dot === currentDot)
//     console.log('CURRENT SLIDE', currentSlide);
//     console.log('CURRENT DOTTT', currentDot);
//     const prevDot = realCurrentDot.previousElementSibling;
//     console.log('PREV DOT', prevDot);
//     const prevIndex = slides.findIndex(slide => slide === prevSlide)
//     console.log('PREV INDEX', prevIndex);
//     console.log('PREV TRACK', track);
//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(realCurrentDot, prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevIndex);

// })

// //todo click right move slides to the right
// nextButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = document.querySelector('.current-slide-btn');
//     const realCurrentDot = dots.find(dot => dot === currentDot)
//     let nextDot = null
//     if (!currentDot && !currentDot.nextElementSibling) {
//         nextDot = dotsNavsSecond[0]
//     } else[
//         nextDot = currentDot.nextElementSibling
//     ]
//     console.log(dots, realCurrentDot);
//     const nextIndex = slides.findIndex(slide => slide === nextSlide)
//     console.log('CURRENT SLIDE', currentSlide, currentSlide.nextElementSibling);
//     console.log('CURRENT DOTTT', currentDot);
//     console.log('NEXT DOT', nextDot);
//     console.log('NEXT SLIDE', nextSlide);
//     console.log('NEXT INDEX', nextIndex);
//     console.log('NEXT TRACK', track);


//     // move the slide
//     moveToSlide(track, currentSlide, nextSlide)
//     updateDots(realCurrentDot, nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);
// })

// //todo click nav move to this slide
// carousel.addEventListener('click', e => {
//     // what indicator was clicked on?
//     const targetDot = e.target.closest('button');

//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = document.querySelector('.current-slide-btn');
//     // const targetIndex = dots.findIndex(dot => dot === targetDot);
//     // const targetSlide = slides[targetIndex];

//     // console.log(dots[0].innerText);
//     // console.log(slides[0]?.dataset.find);
//     const targetIndex = dots.findIndex(dot => dot.innerText === targetDot.innerText);
//     const targetSlide = slides[targetIndex]

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevButton, nextButton, targetIndex);
// })

