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
        <div id="container" class="container">
          ${this.getStepTwo()}
        </div>
        <div class="footer">
          <div class="action prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4992 19.7504C15.3692 19.7504 15.2382 19.7174 15.1182 19.6464C14.3642 19.1994 7.75024 15.1914 7.75024 12.0004C7.75024 8.81043 14.3632 4.80143 15.1182 4.35443C15.4732 4.14343 15.9352 4.26143 16.1452 4.61843C16.3562 4.97543 16.2382 5.43543 15.8822 5.64643C13.3182 7.16543 9.25024 10.2334 9.25024 12.0004C9.25024 13.7704 13.3182 16.8374 15.8822 18.3544C16.2382 18.5654 16.3562 19.0254 16.1452 19.3824C16.0052 19.6184 15.7562 19.7504 15.4992 19.7504Z" fill="black"/>
            </svg>
            <span class="text">Previous</span>
          </div>
          <div class="action next">
            <span class="text">Next</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50076 19.7504C8.63076 19.7504 8.76176 19.7174 8.88176 19.6464C9.63576 19.1994 16.2498 15.1914 16.2498 12.0004C16.2498 8.81043 9.63676 4.80143 8.88176 4.35443C8.52676 4.14343 8.06476 4.26143 7.85476 4.61843C7.64375 4.97543 7.76176 5.43543 8.11776 5.64643C10.6818 7.16543 14.7498 10.2334 14.7498 12.0004C14.7498 13.7704 10.6818 16.8374 8.11776 18.3544C7.76176 18.5654 7.64375 19.0254 7.85476 19.3824C7.99476 19.6184 8.24376 19.7504 8.50076 19.7504Z" fill="black"/>
            </svg>
          </div>
        </div>
      </section>
    ${this.getStyles()}`;
  }

  getStepOne(){
    return `
      <div class="head">
        <h2 class="step-title">Make your reservation now</h2>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum libero at rem maxime porro neque quae?
        </p>
      </div>
      <div class="fields">
        <div class="field name">
          <input type="text" name="name" id="name" placeholder="Your name" required>
          <span class="error">Name is required</span>
        </div>
        <div class="field phone">
          <span class="wrapper">
            <span class="country">+254</span>
            <input type="text" name="number" id="number" placeholder="Phone number" required>
          </span>
          <span class="error">Phone is required</span>
        </div>
        <div class="field email">
          <input type="text" name="email" id="email" placeholder="Your email" required>
          <span class="error">Email is required</span>
        </div>
        <div class="field other">
          <textarea name="other" id="other" cols="auto" rows="auto" placeholder="Additional informatiom"></textarea>
        </div>
      </div>
    `
  }

  getStepTwo(){
    return `
      <div class="head">
        <h2 class="step-title">Make your selections</h2>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="services">
        <div class="options">
          <span class="option">
            <span class="text">Event</span>
          </span>
          <span class="option">
            <span class="text">Hicking</span>
          </span>
          <span class="option">
            <span class="text">Outdoor</span>
          </span>
          <span class="option">
            <span class="text">Party</span>
          </span>
          <span class="option">
            <span class="text">Advertising</span>
          </span>
          <span class="option selected">
            <span class="text">Wedding</span>
          </span>
          <span class="option">
            <span class="text">Videography</span>
          </span>
          <span class="option">
            <span class="text">Editing</span>
          </span>
          <span class="option">
            <span class="text">Product</span>
          </span>
          <span class="option">
            <span class="text">Cultural</span>
          </span>
          <span class="option">
            <span class="text">Professional</span>
          </span>
          <span class="option">
            <span class="text">Graduation</span>
          </span>
          <span class="option">
            <span class="text">Wildlife</span>
          </span>
          <span class="option">
            <span class="text">Traditional</span>
          </span>
        </div>
        <div class="other">
          <span class="text">Others, Please specify</span>
          <input type="text" name="other" id="other" placeholder="Enter others">
        </div>
      </div>
    `
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

      section#content {
        background-color: #ffffff;
        padding: 15px 20px;
        display: flex;
        flex-flow: column;
        justify-content: start;
        align-items: center;
        gap: 0;
        width: 700px;
        height: 80%;
        max-height: max-content;
        min-height: 500px;
        height: max-content;
        border-radius: 25px;
        position: relative;
      }

      #content .content-head{
        margin: 0 20px;
        width: 100%;
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
        justify-content: center;
      }

      #content .content-head > .actions > .control{
        position: absolute;
        left: 20px;
        top: 15px;
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

      section#content > .footer {
       /* border: 1px solid #808080;*/
        margin: 0;
        width: 90%;
        padding: 20px 0 10px 0;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        justify-self: end;
      }

      section#content > .footer > .action {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border-radius: 50px;
        font-family: var(--font-alt);
        line-height: 1.2;
        font-size: 1.2rem;
        font-weight: 500;
        color: #404040;
        cursor: pointer;
      }

      section#content > .footer > .action.prev {
        padding: 10px 20px 10px 15px;
        background: rgba(57, 56, 56, 0.087);
        background: linear-gradient(0deg, rgba(57, 56, 56, 0.087) 0%, rgba(57, 56, 56, 0.187) 100%);
      }

      section#content > .footer > .action.prev svg path {
        fill: #404040;
      }

      section#content > .footer > .action.next {
        padding: 10px 15px 10px 20px;
        color: #ffffff;
        background: #ad5389;
        background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
        background-color: rgb(247, 145, 162);
      }

      section#content > .footer > .action.next svg path {
        fill: #ffffff;
      }

      section#content > .container {
        /*border: 2px solid #808080;*/
        padding: 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }

       section#content > .container > .head {
        /*border: 1px solid blue;*/
        width: 80%;
        margin: 0 0 30px 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 0px;
      }
      
       section#content > .container > .head > h2.step-title {
        margin: 0;
        font-family: var(--font-alt);
        line-height: 1.2;
        font-size: 2rem;
        font-weight: 500;
        color: #404040;
      }
      
       section#content > .container > .head > p.description {
        margin: 0;
        font-family: var(--font-alt);
        font-size: 0.93rem;
        font-weight: 400;
        line-height: 1.5;
        color: #808080;
        text-align: center;
      }

      section#content > .container > .fields {
        /*margin: 0 0 30px 0;*/
        width: 80%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 15px;
      }

      section#content > .container > .fields > .field {
        /*border: 1px solid black;*/
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 2px;
      }

      section#content > .container > .fields > .field > span.error {
        color: #ee7752;
        font-size: 0.8rem;
        display: none;
      }

      section#content > .container > .fields > .field > span.wrapper {
        display: flex;
        align-items: center;
        gap: 0;
        width: 100%;
      }
      section#content > .container > .fields > .field > span.wrapper > span {
        border: 1px solid #80808037;
        border-right: none;
        font-size: 1rem;
        width: 60px;
        padding: 10px 12px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        color: #08b86f;
        display: flex;
        align-items: center;
      }

      section#content > .container > .fields > .field > span.wrapper > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: calc(100% - 60px);
        outline: none;
        padding: 10px 12px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        color: #404040;
      }

      section#content > .container > .fields > .field >  span.wrapper > input:focus {
        border: 1px solid #08b86f60;
      }

      section#content > .container > .fields > .field > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: 100%;
        outline: none;
        padding: 10px 12px;
        border-radius: 12px;
        color: #404040;
      }

      section#content > .container > .fields > .field > input:focus {
        border: 1px solid #08b86f60;
      }

      section#content > .container > .fields > .field > textarea {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: 100%;
        outline: none;
        padding: 10px 12px;
        border-radius: 12px;
        color: #404040;
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 70px;
        min-height: 70px;
        height: 70px;
      }
      section#content > .container > .fields > .field > textarea:focus{
        border: 1px solid #08b86f60;
      }

      section#content > .container > .services {
        /*border: 1px solid #808080;*/
        width: 90%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 15px;
      }

      section#content > .container > .services > .options {
        /*border: 1px solid #808080;*/
        width: 100%;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;
        gap: 15px;
      }

      section#content > .container > .services > .options > .option {
        border: 1px solid #80808037;
        font-size: 1rem;
        padding: 8px 20px;
        border-radius: 50px;
        color: #666666;
        cursor: pointer;
        font-family: var(--font-alt);
        line-height: 1.2;
      }

      section#content > .container > .services > .options > .option.selected {
        border: none;
        background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
        color: #ffffff;
      }


      section#content > .container > .services > .other{
        /*border-top: 1px solid #80808017;*/
        width: 100%;
        padding: 15px 0px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      section#content > .container > .services > .other span.text {
        color: #666666;
        /*text-transform: capitalize;*/
        font-family: var(--font-alt);
        line-height: 1.2;
      }

      section#content > .container > .services > .other > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: 100%;
        outline: none;
        padding: 10px 12px;
        border-radius: 12px;
        color: #404040;
      }

      section#content > .container > .services > .other > input:focus {
        border: 1px solid #08b86f60;
      }

      }
      </style>
    `;
  }
}