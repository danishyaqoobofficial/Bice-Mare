let value = true;
let video_play_button = document.getElementById('video_play_button');

video_play_button.addEventListener('click', () => {
    let video_main_popup = document.getElementById('video_main_popup');

    if (video_play_button) {
        video_main_popup.classList.add('!block');
    }
})

function cancle_video_popup() {
    let video_main_popup = document.getElementById('video_main_popup');
    if (video_main_popup) {
        video_main_popup.classList.remove('!block')
    }
}



// Counting Numbers

let valueDisplays = document.querySelectorAll('.num');
let interval = 1600;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-valur"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    } , duration)
})

// FAQs

function FAQ(e) {
    let mainDiv = e.closest('.main_div');
    let faqAnswer = mainDiv.querySelector('.answer');
    
    faqAnswer.classList.toggle('!block');
}