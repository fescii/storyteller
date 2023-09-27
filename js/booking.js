export default class bookingContainer extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    this.render();

  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
    // this.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');
    
    this.openDetails()
  }

  openDetails() {
    // updating the state

    const arrowUp = `
      <span class="text">Collapse</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    `

    const arrowDown = `
      <span class="text">Expand</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    `

    const expand  = this.shadowObj.querySelector('.head > .right');
    const content  = this.shadowObj.querySelector('.content');

    if (content && expand) {
      expand.addEventListener('click', () => {
        // console.log('Clicked!')
        switch (expand.dataset.expanded) {
          case 'false':
            content.style.display = 'flex'
            expand.dataset.expanded = 'true'
            expand.innerHTML = arrowUp
            break;
          case 'true':
            content.style.display = 'none'
            expand.dataset.expanded = 'false'
            expand.innerHTML = arrowDown
            break;
          default:
            break;
        }
      });
    }
  }

  getTemplate() {
    // Show HTML Here
    return `
      ${this.getHeader()}
      ${this.getBody()}
      ${this.getStyles()}
    
    `;
  }

  getHeader(){
    return `
      <div class="head">
        <div class="left">
          <div class="date">
            <span class="day">${this.getAttribute('date-day')}</span>
            <span class="no">${this.getAttribute('date-date')}</span>
          </div>
          <div class="quick-info">
            <span class="top">
              <span class="month">${this.getAttribute('date-month')}</span>
              <span class="dot"></span>
              <span class="service">${this.getAttribute('service')}</span>
            </span>
            <p class="location">${this.getAttribute('location')}</p>
          </div>
        </div>
        <div class="right" data-expanded="false">
          <span class="text">Expand</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </div>
    `
  }

  getBody(){
    return`
      <div class="content">
        <div class="section bio">
          <div class="infos">
            <div class="info name">
              <h3 class="label">Name</h3>
              <p class="text">${this.getAttribute('full-name')}</p>
            </div>
            <div class="info email">
              <h3 class="label">Phone</h3>
              <p class="text">${this.getAttribute('phone')}</p>
            </div>
            <div class="info number">
              <h3 class="label">Email</h3>
              <p class="text">${this.getAttribute('email')}</p>
            </div>
            <div class="info package">
              <h3 class="label">Package</h3>
              <p class="text">${this.getAttribute('package')}</p>
            </div>
            <div class="info other">
              <h3 class="label">Other</h3>
              <p class="text">${this.getAttribute('other')}</p>
            </div>
          </div>
        </div>
        <div class="section coverage">
          <div class="infos">
            <div class="info coverage">
              <h3 class="label">Coverage</h3>
               <p class="info">${this.getAttribute('coverage')}</p>
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

      :host {
        /* border: 1px solid #ce0404; */
        border-bottom: 1px solid #80808027;
        position: relative;
        padding: 10px 5px;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0;
        /* border-radius: 18px; */
      }

      .head {
        /* border: 1px solid #81ce04; */
        padding: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0;
      }

      .head > .left {
        /* border: 1px solid #81ce04; */
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
      }

      .head > .left > .date {
        /* border: 1px solid #808080; */
        background-color: #f5f5f5;
        padding: 8px 15px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        border-radius: 15px;
      }

      .head > .left > .date > span.day {
        margin: 0;
        color: #808080;
        font-family: var(--font-alt);
        font-size: 0.85rem;
        line-height: 1;
      }

      .head > .left > .date >  span.no {
        margin: 0;
        display: inline-block;
        color:  #404040;
        font-family: var(--font-alt);
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1;
      }

      .head > .left .quick-info {
        /* border: 1px solid #808080; */
        margin: -3px 0 0 0;
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: start;
        gap: 5px;
      }

      .head > .left .quick-info > .top {
        /* border: 1px solid #808080; */
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 0.9rem;
        font-family: var(--font-alt);
        color: #808080;
      }

      .head > .left .quick-info > .top .month {
        /* color: #08b86f; */
        color: #808080;
        /* font-family: inherit; */
        font-size: 1rem;
      }


      .head > .left .quick-info > .top .service {
        /* color: #08b86f; */
        color: #606060;
        font-family: inherit;
      }

      .head > .left .quick-info > .top .dot {
        padding: 0;
        margin: 2px 0 0 0;
        display: flex;
        width: 4px;
        height: 4px;
        gap: 5px;
        font-size: 0.8rem;
        background-color: #808080;
        border-radius: 5px;
        -webkit-border-radius: 5px;
      }

      .head > .left .quick-info  p.location {
        margin: 0;
        color: #404040;
        font-family: var(--font-alt);
        /* font-weight: 500; */
        font-size: 1.1rem;
      }

      .head > .right {
        padding: 5px 8px 5px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        cursor: pointer;
        color: #808080;
        fill: #808080;
        border-radius: 20px;
      }

      .head > .right > span.text {
        color: inherit;
      }

      .head > .right > svg {
        fill: inherit;
      }

      .head > .right:hover {
        color: #08b86f;
        fill: #08b86f;
      }

      .content {
        border-top: 1px dashed #80808047;
        margin: 16px 0 0 0;
        padding: 10px 0 0 0;
        width: 100%;
        display: none;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .content > .section {
        /* border-top: 1px solid #80808017; */
        display: flex;
        flex-flow: column;
        gap: 8px;
        width: 100%;
      }

      .content > .section.coverage {
        /* border-top: 1px solid #80808017; */
        padding: 0 0 10px 0;
      }

      .content > .section.bio > .infos {
        /* border: 1px solid #808080; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 15px;
      }

      .content > .section .infos > .info {
        /* border: 1px solid rgba(182, 19, 19, 0.09); */
        display: flex;
        flex-flow: column;
        gap: 0;
      }


      .content > .section .infos > .info.other {
        grid-column: 1/3;
      }

      .content > .section .infos > .info > h3.label {
        margin: 0;
        color: #404040;
        font-family: var(--font-alt);
        font-size: 1.09rem;
        font-weight: 500;
      }

      .content > .section .infos > .info > p {
        margin: 0;
        color: #404040;
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4;
      }
      
    </style>
    `
  }
}