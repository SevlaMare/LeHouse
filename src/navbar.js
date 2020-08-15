import { createContent, createContainer } from './helpers';

const renderNav = () => {
  const sel = document.querySelector('#content');
  const nav = createContainer('nav');
  const list = createContainer('ul', 'flex', 'nav-list');

  const listItem1 = createContent('li', 'pointer', 'Menu');
  const listItem2 = createContent('li', 'pointer', 'Home');
  const listItem3 = createContent('li', 'pointer', 'Contact');

  listItem1.id = 'nav-menu';
  listItem2.id = 'nav-home';
  listItem3.id = 'nav-contact';

  list.append(listItem1, listItem2, listItem3);
  nav.append(list);
  sel.append(nav);
};

export default renderNav;
