import { createContent, createContainer } from './helpers';

const renderHome = () => {
  const sel = document.querySelector('#content');
  const home = createContainer('div', null, 'home');

  const title = createContent('h1', 't-box slogan bg-dark-60',
    'Enjoy a taste meal in a cozy place!');
  const description = createContent('p', 'description t-box bg-dark-60',
    '"Very tasty food, with a friendly staff, in a cozy atmosphere."');

  home.append(title, description);
  sel.append(home);
};

export default renderHome;
