import { useState } from "react";
import ShowFooterLinks from "./ShowFooterLinks";
const FooterLinks = () => {
  const [state] = useState({
    pages: [
      { id: 1, name: "home", route: "/" },
      { id: 2, name: "about", route: "/about" },
      { id: 3, name: "contact", route: "/contact" },
      { id: 4, name: "shop", route: "/shop" },
    ],
    contactUs: [
      { id: 1, name: "Etsy@gmail.com" },
      { id: 2, name: "012356789"},
      { id: 3, name: "84(8)24567889" },
      { id: 4, name: "78 Duy Tan, Cau Giay, Ha Noi"},
    ],
    headings: {
      pages: "pages",
      contactUs: "contact us",
    },
  });
  const { headings, pages, contactUs } = state;
  return (
    <div className="row">
      <div className="col-md-6">
        <h3 className="footer__heading">{headings.pages}</h3>
        <ShowFooterLinks links={pages} />
      </div>
      <div className="col-md-6">
        <h3 className="footer__heading">{headings.contactUs}</h3>
        <ShowFooterLinks links={contactUs} />
      </div>
    </div>
  );
};

export default FooterLinks;
