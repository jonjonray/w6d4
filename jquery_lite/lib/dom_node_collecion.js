class DOMNodeCollection {
  constructor(array){
    this.elements = array;
  }

  html(arg){
    let result = [];
    if (arg === undefined) {
      this.elements.forEach((ele) => {
        result.push(ele.innerHTML);
      });
    } else {
      this.elements.forEach((ele) => {
        result.push(ele.innerHTML = arg);
      });
    }

    return result;
  }

  empty(){
    this.elements.forEach((ele) =>{
      ele.innerHTML = "";
    });
    return this.elements;
  }

  append(arg){

  }

  attr(){

  }



}

module.exports = DOMNodeCollection;
