let value = true;
let video_play_button = document.getElementById('video_play_button');
let main_hamburger = document.getElementById('main_hamburger');

video_play_button.addEventListener('click', () => {
    let video_main_popup = document.getElementById('video_main_popup');

    if (video_play_button) {
        video_main_popup.classList.add('!block');
    }
})

function cancle_video_popup() {
    let video_main_popup = document.getElementById('video_main_popup');
    if (video_main_popup) {
        video_main_popup.classList.remove('!block');
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

// Hamburger


function open_hamburger() {
        main_hamburger.classList.add('!block');
}
function close_hamburger() {
    main_hamburger.classList.remove('!block');
};

// form validation

function formSubmit() {
    let value = true;

    const fields = [
        { id: 'first_name', errorId: 'first_name_error' },
        { id: 'last_name', errorId: 'last_name_error' },
        { id: 'email', errorId: 'email_error' },
        { id: 'message', errorId: 'message_error' },
    ];


    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        if (input.value.trim() === '') {
            error.classList.remove('hidden');
            value = false;
        } else {
            error.classList.add('hidden');
        }
    });
};