// https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db

class Sidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="sidebar">
      <a href="/index.html" target="_parent">
        <div class="sidebar__logo-box">
          <img src="/media/jw-logo.png" alt="" class="sidebar__logo" />
        </div>
      </a>

      <ul class="sidebar__menu-list">
        <li class="sidebar__menu-item">
          <a
            class="sidebar__menu-link"
            href="/index.html#about"
            target="_parent"
            >01. About</a
          >
        </li>
        <li class="sidebar__menu-item">
          <a
            class="sidebar__menu-link"
            href="/index.html#projects"
            target="_parent"
            >02. Projects</a
          >
        </li>
        <li class="sidebar__menu-item">
          <a class="sidebar__menu-link" href="">03. Contact</a>
        </li>
      </ul>

      <div class="sidebar__social">
        <!-- github -->
        <a href="https://github.com/xinwei47" class="sidebar__icon-link">
          <i class="fab fa-github sidebar__icon"></i>
        </a>
        <!-- linkedin -->
        <a href="https://www.linkedin.com/in/jodiwei/" class="sidebar__icon-link">
          <i class="fab fa-linkedin-in sidebar__icon"></i>
        </a>
        <!-- instagram -->
        <a href="https://www.instagram.com/jodi.travelherway/" class="sidebar__icon-link">
          <i class="fab fa-instagram sidebar__icon"></i>
        </a>
      </div>
    </div>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
      <p class="footer__text">&copy Copyright Jodi Wei 2021</p>
    </div>
    `;
  }
}

class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="" class="email">
      <div class="email__icon-box">
        <i class="far fa-paper-plane email__icon"></i>
      </div>
      <div class="email__address-box">
        <p class="email__address">hello@jodiwei.com</p>
      </div>
    </a>
    `;
  }
}

customElements.define('main-sidebar', Sidebar);
customElements.define('main-footer', Footer);
customElements.define('main-contact', Contact);
