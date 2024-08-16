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

const counters = document.querySelectorAll('.value');
const speed = 400;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        } 
   }
   animate();
});

// FAQs

function FAQ(e) {
    let mainDiv = e.closest('.main_div');
    let faqAnswer = mainDiv.querySelector('.answer');
    let rotate_svg = mainDiv.querySelector('.rotate_svg');
    
    faqAnswer.classList.toggle('!block');
    rotate_svg.classList.toggle('custom_rotate');
}