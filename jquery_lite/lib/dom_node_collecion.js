class DOMNodeCollection {
  constructor(nodes){
    this.nodes = nodes;
  }

  html(arg){
    let result= [];
    if (arg === undefined) {
      this.nodes.forEach((ele) => {
        result.push(ele.innerHTML);
      });
    } else {
      this.nodes.forEach((ele) => {
        ele.innerHTML = arg;
      });
    }

    return result;
  }

  empty(){
    this.nodes.forEach((ele) =>{
      ele.innerHTML = "";
    });
    return this.nodes;
  }

  append(children){
    if (this.nodes.length === 0) return;

    if (typeof children === 'object' &&
        !(children instanceof DOMNodeCollection)) {
      // ensure argument is coerced into DomNodeCollection
      children = new DOMNodeCollection(children);
    }

    if (typeof children === "string") {
      this.each((node) => {
        node.innerHTML += children;
      });
    } else if (children instanceof DOMNodeCollection) {
      // You can't append the same child node to multiple parents,
      // so we must duplicate the child nodes here.
      this.each((node) => {
        // The argument to cloneNode indicates whether or not
        // all children should be cloned.
        children.each((childNode) => {
          node.appendChild(childNode.cloneNode(true));
        });
      });
    }
  }

  attr(arg){
    let result = [];
    if (arguments.length === 0) {
      this.nodes.each((ele) => {
        result.push(ele.attributes[arg]);
      });
    } else {
      this.nodes.each((ele) => {
        ele.attributes[arg] = arguments[0];
      });
    }
    return result;
  }



}

module.exports = DOMNodeCollection;
