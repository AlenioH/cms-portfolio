<script>
  import Icon from '@iconify/svelte';
</script>

<footer>
  <button
    class="back-to-top"
    on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >Back to Top <Icon
      icon="mdi-light:arrow-up"
      color="white"
      width="25"
    /></button
  >
  <nav class="footer-nav">
    <a href="#about">About Me</a> |
    <a href="#portfolio">Portfolio</a>
  </nav>

  <div class="footer-content">
    <p>
      Designed and developed by <a href="https://www.instagram.com/alenio.io/"
        >Alena Hasslacher</a
      >. Built with ❤️ using <a href="https://kit.svelte.dev/">SvelteKit</a>.
    </p>
    <p>
      Have a project in mind? <a href="mailto:alena.hasslacher@gmail.com"
        >Get in touch</a
      >.
    </p>
  </div>
  <small>© 2024 Alena Hasslacher. All rights reserved.</small>
</footer>

<style>
  footer {
    position: relative;
    margin-top: auto;
    background-color: #2c2c2c;
    color: #eaeaea;
    text-align: center;
    padding: 20px 10px;
    font-family: 'Arial', sans-serif;
  }

  .footer-content p,
  .footer-nav,
  small {
    margin: 10px 0;
    font-size: 0.9rem;
  }

  a {
    color: #ffffff;
    transition: color 0.3s;
  }

  a:hover {
    color: #cccccc;
  }

  .footer-nav a {
    margin: 0 5px;
  }

  .back-to-top {
    background-color: #444444;
    color: #ffffff;
    border: none;
    padding: 10px 15px;
    margin: 15px 0;
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: background-color 0.3s;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .back-to-top:hover {
    background-color: #555555;
  }

  small {
    font-size: 0.8rem;
    color: #aaaaaa;
  }
</style>
