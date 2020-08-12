import { createContent, createContainer } from './helpers';

const renderContact = () => {
  // selectors
  const sel = document.querySelector('#content');
  const contact = createContainer('div', 't-box bg-dark-90', 'contact');
  const address = createContainer('div', 'info');
  const reserve = createContainer('div', 'info');
  const info = createContainer('div', 'flex items-flex-end');

  // content
  const title = createContent('h1', null, 'CONTACT');
  const street = createContent('p', null, '677 Main Street');
  const schedule = createContent('p', null, 'Every Saturday at 6pm - 9pm');
  const phone = createContent('p', null, 'Reserves on 555.236.515');

  // annex
  sel.append(contact);
  reserve.append(phone);
  address.append(street, schedule);
  info.append(address, reserve);
  contact.append(title, info);
};

export default renderContact;
