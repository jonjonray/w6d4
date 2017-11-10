
const Router = require("./router");
const Compose = require("./compose");
const Inbox = require("./inbox");
const Sent = require("./sent");


let routes = {
  compose: new Compose,
  inbox: new Inbox,
  sent: new Sent
};

document.addEventListener("DOMContentLoaded", () =>{

  let content = document.querySelector(".content");
  const newRouter = new Router(content,routes);
  newRouter.start();

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav  li"));
  //nav items is a collection of html elements of tag li and class .sidebar-nav
  navItems.forEach(navItem => {
    navItem.addEventListener("click",() => {
      let name = navItem.innerText.toLowerCase();
      window.location.hash = name;
    });
  });








});
