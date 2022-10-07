
document.querySelector('#scroll-to-top').addEventListener('click', scrollToTop)

function scrollToTop() {
    document.getElementById('main').scrollIntoView();
}

const btnProjects = document.querySelectorAll('.projects__accordion, .tools__accordion');


btnProjects.forEach( btn => {
    ['click','keypress'].forEach(eventListener => {
        btn.addEventListener(eventListener, function() {
            if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
                return;
              }
            var pressed = btn.getAttribute('aria-pressed');
            bool = (pressed === 'true');
            bool = !bool;
            btn.setAttribute("aria-pressed", String(bool));
            btn.setAttribute("aria-expanded", String(bool));
            if (eventListener == 'keypress') {
                btn.previousElementSibling.checked = bool;
            }
        });
    });
});