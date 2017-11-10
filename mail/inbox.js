class Inbox{
  constructor(){
  }

  render(){
    let list = document.createElement("ul");
    list.className = "messages";
    list.innerHTML = "An inbox message";
    return list;
  }
}

module.exports = Inbox;
