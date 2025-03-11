const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allsections= document.querySelector('.main-content');


function PageTransitions() {
    // Button click for active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn'); // FIXED
            if (currentBtn) {
                currentBtn.classList.remove('active-btn'); // FIXED
            }
            this.classList.add('active-btn'); // FIXED
        });
    }
}

PageTransitions();
