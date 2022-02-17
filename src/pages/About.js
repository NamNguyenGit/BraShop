import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="etsy , bra , about page"></meta>
      </Helmet>
    </>
  );
};

export default About;
