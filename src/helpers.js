const createContent = (tag, className, text) => {
  const element = document.createElement(tag);

  if (text) { element.innerHTML = text; }
  if (className) { element.className = className; }

  return element;
};

const createContainer = (tag, className, idName) => {
  const element = document.createElement(tag);

  if (className) { element.className = className; }
  if (idName) { element.id = idName; }

  return element;
};

export { createContent, createContainer };
