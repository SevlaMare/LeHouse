const renderHome = (() => {
  const sel = document.querySelector('#content');
  const title = document.createElement('h1');
  title.innerHTML = 'Le House is the house!';
  sel.append(title);
})();

export default renderHome;
