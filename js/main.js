const toggle = document.getElementById('toggle')
const body = document.querySelector('body');
const socialMediaHeader = document.querySelector('div.header.social-media-header');
const card = document.getElementsByClassName('card-social-media');
const overviewHeader = document.querySelector('h2.overview-title')
const overview = document.getElementsByClassName('card-overview');

toggle.addEventListener('input', (e) => {
    const isDark = e.target.checked === false;
    changeColor(isDark)
})


function changeColor(isDark) {
    if (isDark) {
        toggle.classList.add('dark');
        body.classList.add('dark');
        socialMediaHeader.classList.add('dark');
        applyDarkModeToElements(card,isDark);
        overviewHeader.classList.add('dark');
        applyDarkModeToElements(overview, isDark);
    }
    else {
        toggle.classList.remove('dark');
        body.classList.remove('dark');
        socialMediaHeader.classList.remove('dark');
        applyDarkModeToElements(card,isDark);
        overviewHeader.classList.remove('dark');
        applyDarkModeToElements(overview, isDark);
    }
}

function applyDarkModeToElements(elements, isDark) {
    for (let i = 0; i < elements.length; i++) {
        let x = elements.item(i).classList
        isDark ? x.add('dark') : x.remove('dark');
    }
}