
class Router{
  constructor (node,routes){
    this.node = node;
    this.routes = routes;
  }

  start(){

    this.render();

    window.addEventListener('hashchange', ()  => {
      this.render();
    });
  }

  activeRoute(){
    let frag = window.location.hash.slice(1);
    let component = this.routes[frag];
    return component;
  }

  render(){
    this.node.innerHTML = "";
    let route = this.activeRoute();
    if (route) {
      this.node.appendChild(route.render());
    }
  }
}

module.exports = Router;
