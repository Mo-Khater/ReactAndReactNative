const Footer = () => {
    return (
        <div>
        <footer id="contact">
        <ul class="social_icon">
          <li><a href="https://www.facebook.com" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="https://www.github.com" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="https://www.linkedin.com" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          
        </ul>
      
        <ul class="menu">
                    <li><a href="#one">Home</a></li>
                    <li><a href="#two">About</a></li>
                    <li><a href="#three">Services</a></li>
                </ul>
            </footer>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </div>
    );
}
export default Footer;