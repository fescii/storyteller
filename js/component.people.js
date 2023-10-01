export default class PeopleContainer extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();
  }


  render() {
    this.shadowObj.innerHTML = this.getTemplate();
    // this.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');

  }


  getTemplate() {
    // Show HTML Here
    return `
      ${this.getBody()}
      ${this.getStyles()}
    `
  }

  getBody() {
    return `
      ${this.getHeader()}
        
      <div id="content-container" class="content">
        ${this.getPeople()}
      </div>
     
    `
  }

  getHeader() {
    return `
      <div class="header">
        <div class="left">
          <p class="info">List of photographers</p>
        </div>
        <div class="right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <span class="text">Add</span>
        </div>
      </div>
    `
  }

  getPeople() {
    return `
      <div class="person">
        <div class="head">
          <div class="profile">
            <img src="img/explore/by/femar.jpg" alt="Profile">
          </div>
          <div class="info">
            <h4 class="name">Fredrick Ochieng</h4>
            <span class="role">Creative Director</span>
          </div>
        </div>
        <div class="socials">
          <a href="mailto:isfescii@gmail.com" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.84434 9.53351C6.20034 9.95451 9.39134 13.6525 12.0113 13.6525C14.6343 13.6525 17.7933 9.95151 18.1443 9.52951C18.4093 9.21251 18.3663 8.73951 18.0493 8.47451C17.7293 8.20951 17.2583 8.25251 16.9923 8.56951C15.8363 9.95451 13.4613 12.1525 12.0113 12.1525C10.5593 12.1525 8.16234 9.95251 6.99134 8.56651C6.72434 8.24951 6.25134 8.20951 5.93534 8.47651C5.61834 8.74351 5.57834 9.21651 5.84434 9.53351Z"  fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"  d="M1.72656 12.0001C1.72656 19.2851 4.41556 21.8671 11.9996 21.8671C19.5846 21.8671 22.2736 19.2851 22.2736 12.0001C22.2736 4.71506 19.5846 2.13306 11.9996 2.13306C4.41556 2.13306 1.72656 4.71506 1.72656 12.0001ZM3.22656 12.0001C3.22656 5.58806 5.27656 3.63306 11.9996 3.63306C18.7236 3.63306 20.7736 5.58806 20.7736 12.0001C20.7736 18.4121 18.7236 20.3671 11.9996 20.3671C5.27656 20.3671 3.22656 18.4121 3.22656 12.0001Z" fill="black" />
            </svg>
          </a>
          <a href="tel:+254713253018" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25917 3.23499C6.17317 3.23499 6.08617 3.24299 5.99817 3.25699C4.88017 3.44599 3.87317 4.74999 3.66517 5.08899C2.62317 6.55399 3.43717 9.95099 8.73917 15.254C14.0432 20.557 17.4402 21.369 18.8512 20.364C19.2452 20.12 20.5472 19.117 20.7362 17.997C20.8182 17.51 20.6732 17.048 20.2942 16.586C18.0772 13.894 17.3752 14.235 16.4082 14.706C14.9522 15.416 13.5302 15.789 10.8672 13.127C8.20818 10.466 8.57917 9.04399 9.28817 7.58699C9.76017 6.61799 10.1012 5.91799 7.40617 3.69799C7.02917 3.38799 6.65118 3.23499 6.25917 3.23499ZM17.5122 22.264C15.5302 22.264 12.3922 21.028 7.67917 16.314C0.641174 9.27699 1.35517 5.74999 2.40717 4.27299C2.40517 4.27299 3.72917 2.15599 5.69217 1.78899C6.62617 1.61499 7.54517 1.87399 8.35917 2.53899C11.7012 5.29299 11.3912 6.69499 10.6372 8.24299C10.1742 9.19399 9.80818 9.94499 11.9282 12.066C14.0492 14.185 14.8012 13.823 15.7512 13.357C17.3002 12.604 18.7012 12.292 21.4532 15.633C22.1212 16.449 22.3812 17.374 22.2032 18.309C21.8262 20.301 19.6742 21.617 19.6532 21.629C19.1882 21.963 18.4902 22.264 17.5122 22.264Z" fill="black" />
            </svg>
          </a>
          <a href="" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24981 15.4992C4.24981 15.3692 4.28281 15.2382 4.35381 15.1182C4.80081 14.3642 8.80882 7.75024 11.9998 7.75024C15.1898 7.75024 19.1988 14.3632 19.6458 15.1182C19.8568 15.4732 19.7388 15.9352 19.3818 16.1452C19.0248 16.3562 18.5648 16.2382 18.3538 15.8822C16.8348 13.3182 13.7668 9.25024 11.9998 9.25024C10.2298 9.25024 7.16281 13.3182 5.64581 15.8822C5.43481 16.2382 4.97481 16.3562 4.61781 16.1452C4.38181 16.0052 4.24981 15.7562 4.24981 15.4992Z" fill="black" />
            </svg>
          </a>
        </div>
      </div>

      <div class="person">
        <div class="head">
          <div class="profile">
            <img src="img/explore/by/femar.jpg" alt="Profile">
          </div>
          <div class="info">
            <h4 class="name">Fredrick Ochieng</h4>
            <span class="role">Creative Director</span>
          </div>
        </div>
        <div class="socials">
          <a href="mailto:isfescii@gmail.com" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.84434 9.53351C6.20034 9.95451 9.39134 13.6525 12.0113 13.6525C14.6343 13.6525 17.7933 9.95151 18.1443 9.52951C18.4093 9.21251 18.3663 8.73951 18.0493 8.47451C17.7293 8.20951 17.2583 8.25251 16.9923 8.56951C15.8363 9.95451 13.4613 12.1525 12.0113 12.1525C10.5593 12.1525 8.16234 9.95251 6.99134 8.56651C6.72434 8.24951 6.25134 8.20951 5.93534 8.47651C5.61834 8.74351 5.57834 9.21651 5.84434 9.53351Z"  fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"  d="M1.72656 12.0001C1.72656 19.2851 4.41556 21.8671 11.9996 21.8671C19.5846 21.8671 22.2736 19.2851 22.2736 12.0001C22.2736 4.71506 19.5846 2.13306 11.9996 2.13306C4.41556 2.13306 1.72656 4.71506 1.72656 12.0001ZM3.22656 12.0001C3.22656 5.58806 5.27656 3.63306 11.9996 3.63306C18.7236 3.63306 20.7736 5.58806 20.7736 12.0001C20.7736 18.4121 18.7236 20.3671 11.9996 20.3671C5.27656 20.3671 3.22656 18.4121 3.22656 12.0001Z" fill="black" />
            </svg>
          </a>
          <a href="tel:+254713253018" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25917 3.23499C6.17317 3.23499 6.08617 3.24299 5.99817 3.25699C4.88017 3.44599 3.87317 4.74999 3.66517 5.08899C2.62317 6.55399 3.43717 9.95099 8.73917 15.254C14.0432 20.557 17.4402 21.369 18.8512 20.364C19.2452 20.12 20.5472 19.117 20.7362 17.997C20.8182 17.51 20.6732 17.048 20.2942 16.586C18.0772 13.894 17.3752 14.235 16.4082 14.706C14.9522 15.416 13.5302 15.789 10.8672 13.127C8.20818 10.466 8.57917 9.04399 9.28817 7.58699C9.76017 6.61799 10.1012 5.91799 7.40617 3.69799C7.02917 3.38799 6.65118 3.23499 6.25917 3.23499ZM17.5122 22.264C15.5302 22.264 12.3922 21.028 7.67917 16.314C0.641174 9.27699 1.35517 5.74999 2.40717 4.27299C2.40517 4.27299 3.72917 2.15599 5.69217 1.78899C6.62617 1.61499 7.54517 1.87399 8.35917 2.53899C11.7012 5.29299 11.3912 6.69499 10.6372 8.24299C10.1742 9.19399 9.80818 9.94499 11.9282 12.066C14.0492 14.185 14.8012 13.823 15.7512 13.357C17.3002 12.604 18.7012 12.292 21.4532 15.633C22.1212 16.449 22.3812 17.374 22.2032 18.309C21.8262 20.301 19.6742 21.617 19.6532 21.629C19.1882 21.963 18.4902 22.264 17.5122 22.264Z" fill="black" />
            </svg>
          </a>
          <a href="" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24981 15.4992C4.24981 15.3692 4.28281 15.2382 4.35381 15.1182C4.80081 14.3642 8.80882 7.75024 11.9998 7.75024C15.1898 7.75024 19.1988 14.3632 19.6458 15.1182C19.8568 15.4732 19.7388 15.9352 19.3818 16.1452C19.0248 16.3562 18.5648 16.2382 18.3538 15.8822C16.8348 13.3182 13.7668 9.25024 11.9998 9.25024C10.2298 9.25024 7.16281 13.3182 5.64581 15.8822C5.43481 16.2382 4.97481 16.3562 4.61781 16.1452C4.38181 16.0052 4.24981 15.7562 4.24981 15.4992Z" fill="black" />
            </svg>
          </a>
        </div>
      </div>

      <div class="person">
        <div class="head">
          <div class="profile">
            <img src="img/explore/by/femar.jpg" alt="Profile">
          </div>
          <div class="info">
            <h4 class="name">Fredrick Ochieng</h4>
            <span class="role">Creative Director</span>
          </div>
        </div>
        <div class="socials">
          <a href="mailto:isfescii@gmail.com" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.84434 9.53351C6.20034 9.95451 9.39134 13.6525 12.0113 13.6525C14.6343 13.6525 17.7933 9.95151 18.1443 9.52951C18.4093 9.21251 18.3663 8.73951 18.0493 8.47451C17.7293 8.20951 17.2583 8.25251 16.9923 8.56951C15.8363 9.95451 13.4613 12.1525 12.0113 12.1525C10.5593 12.1525 8.16234 9.95251 6.99134 8.56651C6.72434 8.24951 6.25134 8.20951 5.93534 8.47651C5.61834 8.74351 5.57834 9.21651 5.84434 9.53351Z"  fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"  d="M1.72656 12.0001C1.72656 19.2851 4.41556 21.8671 11.9996 21.8671C19.5846 21.8671 22.2736 19.2851 22.2736 12.0001C22.2736 4.71506 19.5846 2.13306 11.9996 2.13306C4.41556 2.13306 1.72656 4.71506 1.72656 12.0001ZM3.22656 12.0001C3.22656 5.58806 5.27656 3.63306 11.9996 3.63306C18.7236 3.63306 20.7736 5.58806 20.7736 12.0001C20.7736 18.4121 18.7236 20.3671 11.9996 20.3671C5.27656 20.3671 3.22656 18.4121 3.22656 12.0001Z" fill="black" />
            </svg>
          </a>
          <a href="tel:+254713253018" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25917 3.23499C6.17317 3.23499 6.08617 3.24299 5.99817 3.25699C4.88017 3.44599 3.87317 4.74999 3.66517 5.08899C2.62317 6.55399 3.43717 9.95099 8.73917 15.254C14.0432 20.557 17.4402 21.369 18.8512 20.364C19.2452 20.12 20.5472 19.117 20.7362 17.997C20.8182 17.51 20.6732 17.048 20.2942 16.586C18.0772 13.894 17.3752 14.235 16.4082 14.706C14.9522 15.416 13.5302 15.789 10.8672 13.127C8.20818 10.466 8.57917 9.04399 9.28817 7.58699C9.76017 6.61799 10.1012 5.91799 7.40617 3.69799C7.02917 3.38799 6.65118 3.23499 6.25917 3.23499ZM17.5122 22.264C15.5302 22.264 12.3922 21.028 7.67917 16.314C0.641174 9.27699 1.35517 5.74999 2.40717 4.27299C2.40517 4.27299 3.72917 2.15599 5.69217 1.78899C6.62617 1.61499 7.54517 1.87399 8.35917 2.53899C11.7012 5.29299 11.3912 6.69499 10.6372 8.24299C10.1742 9.19399 9.80818 9.94499 11.9282 12.066C14.0492 14.185 14.8012 13.823 15.7512 13.357C17.3002 12.604 18.7012 12.292 21.4532 15.633C22.1212 16.449 22.3812 17.374 22.2032 18.309C21.8262 20.301 19.6742 21.617 19.6532 21.629C19.1882 21.963 18.4902 22.264 17.5122 22.264Z" fill="black" />
            </svg>
          </a>
          <a href="" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24981 15.4992C4.24981 15.3692 4.28281 15.2382 4.35381 15.1182C4.80081 14.3642 8.80882 7.75024 11.9998 7.75024C15.1898 7.75024 19.1988 14.3632 19.6458 15.1182C19.8568 15.4732 19.7388 15.9352 19.3818 16.1452C19.0248 16.3562 18.5648 16.2382 18.3538 15.8822C16.8348 13.3182 13.7668 9.25024 11.9998 9.25024C10.2298 9.25024 7.16281 13.3182 5.64581 15.8822C5.43481 16.2382 4.97481 16.3562 4.61781 16.1452C4.38181 16.0052 4.24981 15.7562 4.24981 15.4992Z" fill="black" />
            </svg>
          </a>
        </div>
      </div>

      <div class="person">
        <div class="head">
          <div class="profile">
            <img src="img/explore/by/femar.jpg" alt="Profile">
          </div>
          <div class="info">
            <h4 class="name">Fredrick Ochieng</h4>
            <span class="role">Creative Director</span>
          </div>
        </div>
        <div class="socials">
          <a href="mailto:isfescii@gmail.com" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.84434 9.53351C6.20034 9.95451 9.39134 13.6525 12.0113 13.6525C14.6343 13.6525 17.7933 9.95151 18.1443 9.52951C18.4093 9.21251 18.3663 8.73951 18.0493 8.47451C17.7293 8.20951 17.2583 8.25251 16.9923 8.56951C15.8363 9.95451 13.4613 12.1525 12.0113 12.1525C10.5593 12.1525 8.16234 9.95251 6.99134 8.56651C6.72434 8.24951 6.25134 8.20951 5.93534 8.47651C5.61834 8.74351 5.57834 9.21651 5.84434 9.53351Z"  fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"  d="M1.72656 12.0001C1.72656 19.2851 4.41556 21.8671 11.9996 21.8671C19.5846 21.8671 22.2736 19.2851 22.2736 12.0001C22.2736 4.71506 19.5846 2.13306 11.9996 2.13306C4.41556 2.13306 1.72656 4.71506 1.72656 12.0001ZM3.22656 12.0001C3.22656 5.58806 5.27656 3.63306 11.9996 3.63306C18.7236 3.63306 20.7736 5.58806 20.7736 12.0001C20.7736 18.4121 18.7236 20.3671 11.9996 20.3671C5.27656 20.3671 3.22656 18.4121 3.22656 12.0001Z" fill="black" />
            </svg>
          </a>
          <a href="tel:+254713253018" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25917 3.23499C6.17317 3.23499 6.08617 3.24299 5.99817 3.25699C4.88017 3.44599 3.87317 4.74999 3.66517 5.08899C2.62317 6.55399 3.43717 9.95099 8.73917 15.254C14.0432 20.557 17.4402 21.369 18.8512 20.364C19.2452 20.12 20.5472 19.117 20.7362 17.997C20.8182 17.51 20.6732 17.048 20.2942 16.586C18.0772 13.894 17.3752 14.235 16.4082 14.706C14.9522 15.416 13.5302 15.789 10.8672 13.127C8.20818 10.466 8.57917 9.04399 9.28817 7.58699C9.76017 6.61799 10.1012 5.91799 7.40617 3.69799C7.02917 3.38799 6.65118 3.23499 6.25917 3.23499ZM17.5122 22.264C15.5302 22.264 12.3922 21.028 7.67917 16.314C0.641174 9.27699 1.35517 5.74999 2.40717 4.27299C2.40517 4.27299 3.72917 2.15599 5.69217 1.78899C6.62617 1.61499 7.54517 1.87399 8.35917 2.53899C11.7012 5.29299 11.3912 6.69499 10.6372 8.24299C10.1742 9.19399 9.80818 9.94499 11.9282 12.066C14.0492 14.185 14.8012 13.823 15.7512 13.357C17.3002 12.604 18.7012 12.292 21.4532 15.633C22.1212 16.449 22.3812 17.374 22.2032 18.309C21.8262 20.301 19.6742 21.617 19.6532 21.629C19.1882 21.963 18.4902 22.264 17.5122 22.264Z" fill="black" />
            </svg>
          </a>
          <a href="" class="social">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24981 15.4992C4.24981 15.3692 4.28281 15.2382 4.35381 15.1182C4.80081 14.3642 8.80882 7.75024 11.9998 7.75024C15.1898 7.75024 19.1988 14.3632 19.6458 15.1182C19.8568 15.4732 19.7388 15.9352 19.3818 16.1452C19.0248 16.3562 18.5648 16.2382 18.3538 15.8822C16.8348 13.3182 13.7668 9.25024 11.9998 9.25024C10.2298 9.25024 7.16281 13.3182 5.64581 15.8822C5.43481 16.2382 4.97481 16.3562 4.61781 16.1452C4.38181 16.0052 4.24981 15.7562 4.24981 15.4992Z" fill="black" />
            </svg>
          </a>
        </div>
      </div>
    `
  }


  addPerson() {
    return `
      <div class="add">
        <div class="field">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" required>
        </div>
        <div class="field">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" required>
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required>
        </div>
        <div class="field">
          <label for="number">Phone</label>
          <input type="tel" name="number" id="number" required>
        </div>
        <div class="field">
          <label for="dob">Date of birth</label>
          <input type="date" name="dob" id="dob" required>
        </div>
        <div class="action">
          <button type="button">Create user</button>
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
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        flex-flow: column;
        /* align-items: center; */
        justify-content: center;
        gap: 10px;
      }

      .header {
        border-bottom: 1px solid #80808017;
        margin: 0;
        padding: 20px 0;
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }

      .header > .left > p {
        margin: 0;
        padding: 0;
        font-family: var(--font-alt);
        color: #404040;
        font-size: 1.1rem;
      }

      .header > .right {
        /* border: 1px solid #80808017; */
        background-color: rgba(20,167,62,1);
        padding: 5px 20px 6px 15px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: white;
        cursor: pointer;
      }

      .header > .right svg {
        /* border: 1px solid #80808017; */
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .header > .right span {
        font-family: var(--font-alt);
        font-weight: 500;
      }

      .content {
        /* border: 1px solid #808080; */
        margin: 0;
        padding: 20px 0;
        width: 100%;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        gap: 30px;
      }

      .content > .person {
        border: 1px solid #80808017;
        margin: 0;
        padding: 15px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-image: none;
        box-shadow: 8px 8px 30px 0px rgba(42, 67, 113, 0.034);
      }

      .content > .person > .head {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0;
      }

      .content > .person > .head > .profile {
        /* border: 1px solid #808080; */
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100px;
        height: 100px;
        gap: 0;
        border-radius: 50px;
      }

      .content > .person > .head > .profile > img {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 0;
        border-radius: 50px;
        object-fit: cover;
      }

      .content > .person > .head > .info {
        /* border: 1px solid #808080; */
        padding: 8px 0 18px 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0;
      }

      .content > .person > .head > .info > h4 {
        margin: 0;
        font-family: var(--font-alt);
        font-weight: 500;
        color: #404040;
        font-size: 1.1rem;
      }

      .content > .person > .head > .info > span.role {
        margin: 0;
        font-family: var(--font-alt);
        font-weight: 400;
        color: #808080;
        font-size: 0.85rem;
      }

      .content > .person > .socials {
        /* border: 1px solid #808080; */
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 15px;
      }

      .content > .person > .socials > a {
        /* border: 1px solid #808080; */
        background-color: #f5f5f5;
        padding: 5px 10px;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #808080;
        border-radius: 50px;

      }

      .content > .person > .socials > a:hover svg path { 
        fill: #08b86f;
      }

      .content > .person > .socials > a svg {
        width: 20px;
        height: 20px;
      }

      .content > .person > .socials > a svg path {
        fill: #808080;
      }

      .add {
        margin: 0 0 20px 0;
        width: 90%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 15px;
      }


      .add > .action {
        /* border: 1px solid black; */
        padding: 20px 0 30px 0;
        width: 80%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 2px;
      }

      .add > .action > button {
        border: none;
        outline: none;
        background-color: rgba(20,167,62,1);
        padding: 10px 25px;
        font-family: var(--font-alt);
        font-weight: 500;
        font-size: 1rem;
        color: #ffffff;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        gap: 2px;
        border-radius: 25px;
      }


      .add > .field {
        /*border: 1px solid black;*/
        width: 80%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        gap: 2px;
      }

      .add > .field > span.error {
        color: #ee7752;
        font-size: 0.8rem;
        display: none;
      }

      .add > .field > label {
        font-family: var(--font-alt);
        padding: 5px 2px;
        color: #404040;
        font-weight: 400;
        font-size: 1.1rem;
      }

      .add > .field > span.wrapper {
        display: flex;
        align-items: center;
        gap: 0;
        width: 100%;
      }
      .add > .field > span.wrapper > span {
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

      .add > .field > span.wrapper > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: calc(100% - 60px);
        outline: none;
        padding: 10px 12px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        color: #404040;
      }

      .add > .field >  span.wrapper > input:focus {
        border: 1px solid #08b86f60;
      }

      .add > .field > input {
        border: 1px solid #80808037;
        font-size: 1rem;
        width: 100%;
        outline: none;
        padding: 10px 12px;
        border-radius: 12px;
        color: #404040;
      }

      .add > .field > input:focus {
        border: 1px solid #08b86f60;
      }
    
      
    </style>
    `
  }
}