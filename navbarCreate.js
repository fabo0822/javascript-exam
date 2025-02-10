export class NavbarCreate extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /*html*/`

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Marvel</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Dc</a>
                  </li>
               
                </ul>
              </div>
            </div>
          </nav>
        


        `
    }
}
customElements.define('navbar-create',NavbarCreate);