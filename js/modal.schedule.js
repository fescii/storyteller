export default class ModalSchedule extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();

  }


  render() {
    // this.shadowObj.innerHTML = this.getTemplate();
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');
    this.disableScroll()


    const exitModal = this.shadowObj.querySelector('#content .content-head > .actions > .control')
    const overlay = this.shadowObj.querySelector('div.overlay')
    if (exitModal) {
      exitModal.addEventListener('click', (e) => {
        e.preventDefault()
        this.remove()
      })
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        e.preventDefault()
        this.remove()
      })
    }

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
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  enableScroll() {
    document.body.classList.remove("stop-scrolling");
    window.onscroll = function () { };
  }

  validateInputs(data, stepValue, contentContainer){

    const hideError = (element) => {
      setTimeout(() => {
        element.style.display = 'none'
      }, 2000);
    }

    const container = this.shadowObj.querySelector("section#content > .container > .fields")
    
    const name = container.querySelector('.field.name>input'),
    phone = container.querySelector('.field.phone input'),
    email = container.querySelector('.field.email>input'),
    other = container.querySelector('.field.other textarea');

    if (name.value.length > 5) {
      if (phone.value.length > 7 ) {
        if (email.value.length > 5) {
          data.Client = {'name': name.value, 'phone': phone.value, 'email': email.value, 'other': other.value}
          stepValue.textContent = 2;
          contentContainer.innerHTML = this.getStepTwo()
          this.activateStepTwo()
        }
        else {
          const errSpan = container.querySelector('.field.email .error')
          errSpan.style.display = 'flex'
          hideError(errSpan)
        }
      }
      else {
        const errSpan = container.querySelector('.field.phone .error')
        errSpan.style.display = 'flex'
        hideError(errSpan)
      }
    }
    else{
      const errSpan = container.querySelector('.field.name .error')
      errSpan.style.display = 'flex'
      hideError(errSpan)
    }
  }

  activateStepTwo(){
    const options = this.shadowObj.querySelectorAll("section#content > .container > .services > .options > .option")
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault()
        option.classList.toggle('selected')
      })
    });
  }

  validateStepTwo(data, stepValue, contentContainer, nextBtn){
    const options = this.shadowObj.querySelectorAll("section#content > .container > .services > .options > .option.selected")
    const other = this.shadowObj.querySelector("section#content > .container > .services > .other > input")
    let services  = []
    if (options) {
      options.forEach(option => {
        services.push(option.dataset.value)
      });

      data.Services = services
      data.OtherServices = other.value

      stepValue.textContent = 3;
      contentContainer.innerHTML = this.getStepThree()
      nextBtn.classList.toggle('disabled')
      this.populateDate(nextBtn)
    }
  }

  getTemplate() {
    // Show HTML Here
    return `
      <div class="overlay"></div>
      <section id="content" class="content">
        <div class="content-head">
          <div class="actions">
            <span class="control">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </span>
            <span class="steps">
              <span class="text">Scheduling</span>
            </span>
          </div>
        </div>
        <div id="container" class="container">
          ${this.getContent()}
        </div>
        <div class="footer">
          <div class="action next">
            <span class="text">Schedule</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50076 19.7504C8.63076 19.7504 8.76176 19.7174 8.88176 19.6464C9.63576 19.1994 16.2498 15.1914 16.2498 12.0004C16.2498 8.81043 9.63676 4.80143 8.88176 4.35443C8.52676 4.14343 8.06476 4.26143 7.85476 4.61843C7.64375 4.97543 7.76176 5.43543 8.11776 5.64643C10.6818 7.16543 14.7498 10.2334 14.7498 12.0004C14.7498 13.7704 10.6818 16.8374 8.11776 18.3544C7.76176 18.5654 7.64375 19.0254 7.85476 19.3824C7.99476 19.6184 8.24376 19.7504 8.50076 19.7504Z" fill="black"/>
            </svg>
          </div>
        </div>
      </section>
    ${this.getStyles()}`;
  }

  getContent() {
    return `
      <div class="head">
        <h2 class="step-title">Make your selections</h2>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="fields">
        <div class="field name">
          <input type="date" name="name" id="name" placeholder="Your name" required>
          <span class="error">Date is required</span>
        </div>
      </div>
      <div class="services">
        <div class="options">
          <span class="option" data-value="event">
            <span class="text">Mathias</span>
          </span>
          <span class="option" data-value="hicking">
            <span class="text">Sheldon</span>
          </span>
          <span class="option" data-value="outdoor">
            <span class="text">Malcolm</span>
          </span>
          <span class="option" data-value="party">
            <span class="text">Femar</span>
          </span>
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
        z-index: 12;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
      }

      div.overlay {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 12;
        cursor: pointer;
        /* background-color: #000; */
      }

      section#content {
        background-color: #ffffff;
        padding: 15px 0;
        z-index: 20;
        display: flex;
        flex-flow: column;
        justify-content: start;
        align-items: center;
        gap: 0;
        width: 700px;
        height: 100%;
        max-height: max-content;
        min-height: min-content;
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

      #content .content-head > .actions > span.steps > .step {
        color: rgb(223, 121, 26);
      }

      section#content > .footer {
        border-top: 1px solid #80808027;
        margin: 0;
        width: 90%;
        padding: 20px 0 10px 0;
        display: flex;
        flex-flow: row;
        /* justify-content: space-between; */
        align-items: center;
        justify-content: center; 
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

      section#content > .footer > .action.disabled {
        background: #80808023;
        pointer-events: none;
        opacity: .9;
      }

      section#content > .container {
        /*border: 2px solid #808080;*/
        width: 90%;
        padding: 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }

       section#content > .container > .head {
        /*border: 1px solid blue;*/
        width: 90%;
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
        margin: 0 0 20px 0;
        width: 90%;
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

      /*Schedules*/

      .schedules {
        background-color: #80808010;
        width: 100%;
        min-width: 100%;
        position: relative;
        padding: 20px 25px;
        display: flex;
        gap: 0px;
        flex-flow: column;
        border-radius: 25px;
      }

      .schedules>.schedules-header{
        /*border: 1px solid #808080;*/
        display: flex;
        flex-flow: column;
        gap: 10px;
      }

      .schedules>.schedules-header>.title-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .schedules>.schedules-header>.title-wrapper>.navs {
        /*border: 1px solid #808080;*/
        padding: 0 5px 0 0;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 15px;
      }

      .schedules > .schedules-header > .title-wrapper > .navs > .nav {
        background-color: #80808013;
        width: 28px;
        height: 28px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: #808080;
        cursor: pointer;
        border-radius: 50px;
      }

      .schedules > .schedules-header > .title-wrapper > .navs > .nav:hover {
        background-color: #08b86f;
        color: #ffffff;
      }

      .schedules > .schedules-header > .title-wrapper > .navs > .nav > svg {
        width: 16px;
        height: 16px;
        stroke-width: 1.8;
      }

      .schedules > .schedules-header > .title-wrapper > .selected-date {
        font-size: 1.2rem;
        color: #666666;
      }

      .schedules > .schedules-header > .days{
        /*border: 1px solid #808080;*/
        display: flex;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: space-between;
        gap: 5px;
      }

      .schedules>.schedules-header>.days>.day {
        padding: 8px 10px;
        width: 65px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 15px;
        color: #808080;
        cursor: pointer;
      }

      .schedules > .schedules-header > .days > .day.selected {
        /*background-color: #ffffff;
        font-weight: bold;
        color: #404040;*/
        background:  rgb(223, 121, 26);
        background: linear-gradient(0deg, rgb(223, 121, 26) 0%, rgb(240, 156, 78) 100%);
        background-color: rgb(247, 145, 162);
        color: #ffffff;
      }

      .schedules > .schedules-header > .days > .day.selected > span.dot {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #ffffff;
        border-radius: 25px;
      }

      .schedules > .schedules-header > .days > .day:hover {
        background-color: #90909017;
      }

      .schedules > .schedules-header > .days > .selected:hover {
        background-color: #ffffff;
      }

      .schedules > .schedules-header > .days > .day > .name {
        color: inherit;
      }
     
      .schedules > .schedules-header > .days > .day > .date {
        display: inline-block;
        color: inherit;
      }
      
      .calendar-action {
       /* border: 1px solid #808080;*/
        width: 100%;
        padding: 20px 25px;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 10px;
      }

      .calendar-action > span.look {
        background-color: #80808057;
        color: #808080;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: max-content;
        padding: 10px 20px;
        border-radius: 50px;
        animation: skeleton 1s linear infinite alternate;
      }

      @keyframes skeleton {
          0%{
            opacity: 1;
          }
          100%{
            opacity: .25;
          }
        }

      .calendar-action > .results {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 18px;
      }

      .calendar-action  span.inform {
        color: #808080;
      }

      .calendar-action  span.empty {
        color: #ff9500;
        padding: 25px 20px;
        font-family: var(--font-alt);
        font-weight: 500px;
        text-align: center;
      }

      .calendar-action > .results  > .photographer {
        background-color: #80808010;
        padding: 12px 18px;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        border-radius: 25px;
      }

      .calendar-action > .results  > .photographer .info {
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: 10px;
      }

      .calendar-action > .results  > .photographer .info > .image {
        width: 32px;
        height: 32px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50px;
      }

      .calendar-action > .results  > .photographer .info > .image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50px;
      }


      .calendar-action > .results  > .photographer .info > .name {
        display: flex;
        flex-flow: column;
        align-items: start;
        gap: 0;
      }

      .calendar-action > .results  > .photographer .info > .name  p {
        margin: 0;
        font-family: var(--font-alt);
        font-weight: 500px;
        color: #404040;
      }

      .calendar-action > .results  > .photographer .info > .name  span {
        margin: 0;
        color: #808080;
        font-size: 0.9rem;
        text-transform: lowercase;
      }

      .calendar-action > .results  > .photographer .select {
        background-color: #099eef18;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        align-items: center;
        color: #08b86f;
        padding: 8px 18px;
        border-radius: 15px;
        cursor: pointer;
      }

      .calendar-action > .results  > .photographer .selected {
        background-color: #08b86f;
        color: #ffffff;
      }

      section#content .packages {
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        flex-flow: row;
        padding: 15px 0 25px 0;
        align-items: start;
        gap: 15px;
      }

      section#content .packages > .package {
        border: 1px solid #80808027;
        width: 200px;
        max-width: 200px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 10px;
        padding: 15px 15px;
        border-radius: 20px;
      }

      section#content .packages > .package.selected {
        background-color: #80808010;
        border: none;
      }

      section#content .packages > .package >  .name {
        /* border: 1px solid #80808027; */
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 2px;
      }

      section#content .packages > .package .name >p.name {
        margin: 0;
        font-family: var(--font-alt);
        font-weight: 500px;
        font-size: 1.2rem;
        color: #404040;
      }

      section#content .packages > .package .name > span {
        margin: 0;
        font-size: 0.8rem;
        color: #808080;
      }

      section#content .packages > .package .items {
        /* border: 1px solid #80808027; */
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        gap: 5px;
      }

      section#content .packages > .package .items > .item{
        border: 1px solid #80808027;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        padding: 3px 10px;
        border-radius: 50px;
        font-size: 0.8rem;
        color: #808080;
      }

      section#content .packages > .package .price{
        border-top: 1px solid #80808027;
        width: 100%;
        font-family: var(--font-alt);
        display: flex;
        flex-flow: row;
        justify-content: start;
        align-items: start;
        padding: 10px 0 0 0;
        font-size: 1.1rem;
        color: #808080;
      }

      section#content .packages > .package .price span {
        display: inline-block;
        padding: 0 5px 0 0;
      }

      section#content .packages > .package .select {
        background-color: #099eef18;
        font-family: var(--font-alt);
        width: 100%;
        text-align: center;
        color: #08b86f;
        padding: 8px 18px;
        border-radius: 15px;
        cursor: pointer;
      }

      section#content .packages > .package.selected .select {
        background-color: #08b86f;
        color: #ffffff;
      }

      section#content  p.manual-title {
        /* align-self: start; */
        margin: 0;
        font-family: var(--font-alt);
        font-weight: 500px;
        font-size: 1.2rem;
        color: #404040;
      }

      section#content  p.manual-title span {
        /* align-self: start; */
        padding: 0 5px;
        font-family: var(--font-alt);
        /* font-weight: 500px; */
        font-size:0.93rem;
        color: #404040;
      }

      section#content .select-manually {
        /* border: 1px solid black; */
        /* align-self: start; */
        display: flex;
        flex-flow: row;
        padding: 15px 0 25px 0;
        align-items: start;
        gap: 15px;
      }

      section#content .select-manually > .picker {
        /* border: 1px solid black; */
        background-color: #80808010;
        align-self: start;
        display: flex;
        flex-flow: row;
        padding: 15px 15px;
        border-radius: 15px;
        align-items: start;
        gap: 15px;
      }

      section#content .select-manually > .picker span.no {
        /* border: 1px solid black; */
        background-color: #ffffff;
        width: 30px;
        height: 30px;
        text-align: center;
        padding: 5px;
        border-radius: 50px;
        color:  #099eef;
      }

      section#content .select-manually > .picker > .nav {
        width: 28px;
        height: 28px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        cursor: pointer;
        border-radius: 50px;
        background:  rgb(223, 121, 26);
        background: linear-gradient(0deg, rgb(223, 121, 26) 0%, rgb(240, 156, 78) 100%);
        background-color: rgb(247, 145, 162);
      }

      section#content .select-manually > .picker > .nav > svg {
        rotate: -90deg;
        width: 16px;
        height: 16px;
        stroke-width: 1.8;
      }

      section#content .pay {
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        flex-flow: row;
        padding: 15px 0 25px 0;
        align-items: center;
        justify-content: center;
        gap: 15px;
      }

      section#content .pay > .field  p {
        margin: 0 0 10px 0;
        font-family: var(--font-alt);
        font-weight: 500px;
        color: #404040;
      }

      section#content .pay > .field > span.wrapper {
        display: flex;
        align-items: center;
        gap: 0;
        width: 100%;
      }

      section#content .pay > .field > span.wrapper > span {
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

      section#content .pay > .field > span.wrapper > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: calc(100% - 60px);
        outline: none;
        padding: 10px 12px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        color: #505050;
      }

      section#content .pay > .field >  span.wrapper > input:focus {
        border: 1px solid #08b86f60;
      }

      </style>
    `;
  }
}