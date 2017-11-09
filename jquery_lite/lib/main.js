const DOMNodeCollection = require("./dom_node_collection");

Window.prototype.$l = function(element) {
  let store;
  if (typeof element === HTMLElement) {
    store = [element];
  } else {
    store = element;
  }
  return new DOMNodeCollection(store);

};
