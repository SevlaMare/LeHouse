import { createContent, createContainer } from './helpers';

const renderMenu = () => {
  const sel = document.querySelector('#content');

  // menu container
  const menu = createContainer('div', 't-box bg-dark-90', 'menu');

  // menu items
  const item1 = createContent('h1', null, 'MACARRONE');
  const item2 = createContent('hr', null, null);
  const item3 = createContent('p', null, 'Pasta that melts in your mouth');

  sel.append(menu);
  menu.append(item1, item2, item3);
};

export default renderMenu;
