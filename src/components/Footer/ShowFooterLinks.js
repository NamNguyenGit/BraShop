import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ShowFooterLinks = ({links}) => {
    return links.map((link) => (
        <ul className="footer__ul" key={link.id} > 
            <li className="footer__ul__li animation">
            <>
            <BsChevronRight size={12} />
            <Link
              to={
                link.hasOwnProperty("route")
                  ? link.route
                  : ``
              }
            >
              {link.name}
            </Link>
          </>
            </li>
        </ul>
    ))
}
 
export default ShowFooterLinks;