const Footer = () => {
  const footerStyle = {
    background: "url(/assets/image/footer/footer.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer__container">
        <div className="container">
          <div className="footer__container__block">
            <div class="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; copy right Etsy {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
