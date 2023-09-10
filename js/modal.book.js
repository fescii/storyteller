export default class ModalBook extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    this.render();

  }


  render() {
    // this.shadowObj.innerHTML = this.getTemplate();
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');
    this.disableScroll()

  }

  disconnectedCallback() {
    // console.log('We are inside disconnectedCallback');
    // adding event handler to the button
    this.enableScroll()
  }


  disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    document.body.classList.add("stop-scrolling");

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  enableScroll() {
    document.body.classList.remove("stop-scrolling");
    window.onscroll = function() {};
  }

  getTemplate() {
    // Show HTML Here
    return `
      <section id="content" class="content">
        <div class="content-head">
          <div class="actions">
            <span class="control">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </span>
            <span class="steps">
              <span class="text">Step</span>
              <span class="step">1</span>
              <span class="slash">/</span>
              <span class="all">4</span>
            </span>
          </div>
        </div>
        <div id="order-contents" class="order-contents">
          ${this.getLoader()}
        </div>
      </section>
    ${this.getStyles()}`;
  }

  getContent(){
    return`
      <div class="infos">
        <div class="head">
          <div class="name">Fredrick Ochieng</div>
          <div class="user-info">
            <span class="email">isfecii@gmail.com</span>
            <span class="num">+254713253018</span>
          </div>
        </div>
        <div class="description">
          <p class="title">Due</p>
          <span class="text">
            23 AUG
          </span>
        </div>
        <div class="description">
          <p class="title">Paper Type</p>
          <span class="text">
            MLA Paper format
          </span>
        </div>
        <div class="description">
          <p class="title">Academic Level</p>
          <span class="text">
            Masters Degree
          </span>
        </div>
        <div class="description">
          <p class="title">Subject/Discipline</p>
          <span class="text">
            Computer Technology
          </span>
        </div>
        <div class="description">
          <p class="title">Topic</p>
          <span class="text">
            Computer Technology
          </span>
        </div>
        <div class="description">
          <p class="title">Description</p>
          <span class="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dolores maxime voluptates accusamus eos hic nisi accusantium voluptate dolore non! Debitis quam saepe deleniti nam expedita atque officiis vero tempore.
          </span>
        </div>
        <div class="description">
          <p class="title">Pages</p>
          <span class="text">
            4 Pages Double Spaced
          </span>
        </div>
        <div class="description">
          <p class="title">References</p>
          <span class="text">
            4 References
          </span>
        </div>
        <div class="files">
          <p class="title">Attached files</p>
          <div class="links">
            <a href="image_location.zip" download>
              <i class="bi bi-cloud-download"></i>
              <span class="file-name">File name</span>
            </a>
            <a href="image_location.zip" download>
              <i class="bi bi-cloud-download"></i>
              <span class="file-name">File name</span>
            </a>
            <a href="image_location.zip" download>
              <i class="bi bi-cloud-download"></i>
              <span class="file-name">File name</span>
            </a>
          </div>
        </div>
      </div>`
  }

  getLoader() {
    return `
      <div id="loader" class="loader">
        <div class="post">
          <div class="top">
            <div class="info">
              <p class="name"></p>
              <span class="time"></span>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="top">
            <div class="info">
              <p class="name"></p>
              <span class="time"></span>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="top">
            <div class="info">
              <p class="name"></p>
              <span class="time"></span>
            </div>
          </div>
        </div>
      </div>
    `
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }
      :host{
        border: none;
        background-color: rgba(25, 25, 28, 0.671);
        padding: 0;
        justify-self: end;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        z-index: 20;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
      }

      #content {
        background-color: #ffffff;
        padding: 15px 0 30px 0;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        gap: 0;
        width: 700px;
        min-height: 80%;
        max-height: 90%;
        height: max-content;
        border-radius: 25px;
        position: relative;
      }

      #content .content-head{
        margin: 0 20px;
        /*border-bottom: 1px solid #80808027;*/
        padding: 5px 0 10px 0;
        display: flex;
        flex-flow: column;
        gap: 0px;
        justify-content: center;
      }

      #content .content-head > .actions{
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
      }

      #content .content-head > .actions > .control{
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        color: #808080;
        cursor: pointer;
      }

      #content .content-head > .actions > .control:hover{
        color: #ee7752;
      }

      #content .content-head > .actions > .control > svg{
        width: 25px;
        height: 25px;
    
      }

      #content .content-head > .actions > span.steps {
        /*background-color: #08b86f;*/
        color: #808080;
        padding: 4px 15px 5px 12px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 3px;
        cursor: pointer;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }

      #content .content-head > .actions > span.steps > .text{
        padding: 0 5px 0 0;
      }

      #content .content-head > .actions > span.steps > .step{
        color: rgb(223, 121, 26);
      }

      }
      </style>
    `;
  }
}