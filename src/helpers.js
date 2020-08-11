const createContent = (tag, className, text) => {
  const element = document.createElement(tag);
  text ? element.innerHTML = text : null;
  className ? element.className = className : null;
  return element;
};

const createContainer = (tag, className, idName) => {
  const element = document.createElement(tag);
  className ? element.className = className : null;
  idName ? element.id = idName : null;
  return element;
};

export { createContent, createContainer };
