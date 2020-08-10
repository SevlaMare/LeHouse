const renderHome = (() => {
  const sel = document.querySelector('#content');

  const title = document.createElement('h1');
  title.innerHTML = 'Enjoy a taste meal in a cozy place!';
  title.setAttribute('class', 't-box');

  const description = document.createElement('p')
  description.innerHTML = `"Very tasty food, with friendly staff in a cozy atmosphere."`
  description.setAttribute('class', 'description t-box');
  
  sel.append(title, description);
})();

export default renderHome;
