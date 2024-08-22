let value = true;
let video_play_button = document.getElementById('video_play_button');
let main_hamburger = document.getElementById('main_hamburger');
let video = document.getElementById('video');

video_play_button.addEventListener('click', () => {
    let video_main_popup = document.getElementById('video_main_popup');

    if (video_play_button) {
        video_main_popup.classList.add('!block');
        video.play();
    }
})

function cancle_video_popup() {
    let video_main_popup = document.getElementById('video_main_popup');
    if (video_main_popup) {
        video_main_popup.classList.remove('!block');
        video.pause();
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

    const emailField = document.getElementById('email');
    const emailError = document.getElementById('email_error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailField.value.trim())) {
        emailError.classList.remove('hidden');
        value = false;
    } else {
        emailError.classList.add('hidden');
    }

    if (value) {
        fields.forEach(field => {
            document.getElementById(field.id).value = '';
        });

        alert('Message sent successfully!');
    }
}

// sticky bgColor


function hello(e) {

    document.querySelectorAll('#hell').forEach(function(el) {
        el.classList.remove('!bg-white', '!bg-primary', '!text-theme_white');
    });

    let vvvv = e.closest('#hell');
    if (vvvv) {
        vvvv.classList.add('!bg-primary', '!text-theme_white');
    }
}

// 

function blogCategory(e) {
    let main_category_button = e.closest('#main_category_button');
    let blogCategoryButton = main_category_button.querySelector('#blogCategoryButton');
    let changing_text_main = document.getElementById('changing_text_main');
    let changing_text = document.getElementById('changing_text');
    let Archiving_main = document.getElementById('Archiving_main');


    changing_text_main.classList.add('!block');
    changing_text.innerHTML = blogCategoryButton.innerText
    Archiving_main.classList.add('!block')
}


// 


window.addEventListener('load', () => {
    let shimmer = document.getElementById('shimmer');
    let outer_shimmer = document.getElementById('outer_shimmer');
    let images = outer_shimmer.getElementsByTagName('img');
    let imagesLoaded = 0;

    function checkAllImagesLoaded() {
        if (imagesLoaded === images.length) {
            shimmer.classList.add('hidden');
            outer_shimmer.classList.remove('hidden');
        }
    }
    for (let i = 0; i < images.length; i++) {
        if (images[i].complete) {
            imagesLoaded++;
            checkAllImagesLoaded();
        } else {
            images[i].addEventListener('load', () => {
                imagesLoaded++;
                checkAllImagesLoaded();
            });
        }
    }
});