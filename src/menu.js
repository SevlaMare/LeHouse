import { createContent, createContainer } from './helpers';

const renderMenu = () => {
  const sel = document.querySelector('#content');

  // menu container
  const menu = createContainer('div', 't-box bg-dark-90', 'menu');
  const menuItem1 = createContainer('div', 'menu-item');
  const menuItem2 = createContainer('div', 'menu-item');
  const menuItem3 = createContainer('div', 'menu-item');

  // menu items
  const item1 = createContent('h1', null, 'PAST');
  const item2 = createContent('hr', null, null);
  const item3 = createContent('p', null, 'Pasta that melts in your mouth');

  const item4 = createContent('h1', null, 'LASAGNA');
  const item5 = createContent('hr', null, null);
  const item6 = createContent('p', null, 'The original lasagna recipe from Tibet monks (Very Awesome)');

  const item7 = createContent('h1', null, 'PIZZA');
  const item8 = createContent('hr', null, null);
  const item9 = createContent('p', null, 'Just a regular pizza');

  // annex
  sel.append(menu);
  menuItem1.append(item1, item2, item3);
  menuItem2.append(item4, item5, item6);
  menuItem3.append(item7, item8, item9);
  menu.append(menuItem1, menuItem2, menuItem3);
};

export default renderMenu;
