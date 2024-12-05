class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="./components/footer/footer.css"/>

      <footer>
        <ul>
          <li>
            <a href="https://github.com/imSamaritan/quote-generator" target="_blank">
              <span class="fa fa-github"></span>
            </a>
          </li>        
          <li>
            <a href="https://bsky.app/profile/imsamaritan.bsky.social" target="_blank">
              <img src="./imgs/butterfly.png" alt="bluesky.app">
            </a>
          </li>
          <li>
            <a href="https://x.com/imsamaritan_dev" target="_blank">
              <span class="fa fa-twitter"></span>
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/profile.php?id=61557349955738" target="_blank">
              <span class="fa fa-facebook"></span>
            </a>
          </li>          
        </ul>
      </footer>
    `;
  }
}

window.customElements.define('qg-footer', Footer);