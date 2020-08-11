import { createContent, createContainer } from './helpers';

const rendeMenu = (() => {
  const sel = document.querySelector('#content');

  // menu container
  sel.append(createContainer('div', 't-box', 'menu'))

  // menu items
  menu.append(createContent('h1', null, 'MACARRONE'))
  menu.append(createContent('hr', null, null))
  menu.append(createContent('p', null, 'Pasta that melts in your mouth')) 
})();

export default renderMenu;
