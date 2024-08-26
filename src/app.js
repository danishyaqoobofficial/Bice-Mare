// Counting Numbers

let allSpans = document.querySelectorAll('.value');
let timing = 5000;

allSpans.forEach(AllSpan => {
    let startValue = 0;
    let endValue = parseInt(AllSpan.getAttribute('increaseValue'));
    
    let duration = Math.floor(timing / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        AllSpan.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
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

let reservation_popup_main = document.getElementById('reservation_popup_main');

function reservation_popup() {
    reservation_popup_main.classList.add('!block');
}

function reservation_popup_close() {
    reservation_popup_main.classList.remove('!block');
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const section = document.querySelector('.section');

        if (header && section) {
            const headerBottom = header.getBoundingClientRect().bottom;
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop <= headerBottom) {
                section.style.backgroundColor = '#FDEBEC';
            } else {
                section.style.backgroundColor = '#FFFFFF';
            }
        } else {
            console.error('Header or Section element not found.');
        }
    });

    const section = document.querySelector('.section');
    if (section) {
        section.style.backgroundColor = '#FDEBEC';
    }
});