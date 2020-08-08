const renderNav = (() => {
  const sel = document.querySelector("#content");
  const nav = document.createElement('nav');
  const list = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  listItem1.innerHTML = 'Menu';
  listItem2.innerHTML = 'Home';
  listItem3.innerHTML = 'Contact';
  list.setAttribute('class', 'flex');
  list.append(listItem1);
  list.append(listItem2);
  list.append(listItem3);
  nav.append(list);
  sel.append(nav);
})();

export default renderNav;
