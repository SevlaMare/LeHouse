import renderNav from './navbar';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import './css/style.css';

renderNav();
renderHome();

const sel = (selector) => document.querySelector(selector);

sel('#nav-menu').addEventListener('click', () => {
  if (!(sel('#menu'))) {
    if (sel('#home')) { sel('#home').remove(); }
    if (sel('#contact')) { sel('#contact').remove(); }
    renderMenu();
  }
});

sel('#nav-contact').addEventListener('click', () => {
  if (!(sel('#contact'))) {
    if (sel('#home')) { sel('#home').remove(); }
    if (sel('#menu')) { sel('#menu').remove(); }
    renderContact();
  }
});

sel('#nav-home').addEventListener('click', () => {
  if (!(sel('#home'))) {
    if (sel('#contact')) { sel('#contact').remove(); }
    if (sel('#menu')) { sel('#menu').remove(); }
    renderHome();
  }
});
