const renderNav = (() => {
  const sel = document.querySelector('#content');
  const nav = document.createElement('nav');
  const list = document.createElement('ul');

  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');

  listItem1.innerHTML = 'Menu';
  listItem2.innerHTML = 'Home';
  listItem3.innerHTML = 'Contact';
  listItem1.setAttribute('class', 'pointer');
  listItem2.setAttribute('class', 'pointer');
  listItem3.setAttribute('class', 'pointer');
  list.setAttribute('class', 'flex');

  list.append(listItem1, listItem2, listItem3);
  nav.append(list);
  sel.append(nav);
})();

export default renderNav;
