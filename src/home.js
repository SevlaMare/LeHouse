import { createContent } from './helpers';

const renderHome = () => {
  const sel = document.querySelector('#content');

  const title = createContent('h1', 't-box slogan bg-dark-60',
    'Enjoy a taste meal in a cozy place!');
  const description = createContent('p', 'description t-box bg-dark-60',
    '"Very tasty food, with friendly staff in a cozy atmosphere."');

  sel.append(title, description);
};

export default renderHome;
