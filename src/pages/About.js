import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import PageContainer from "../components/PageParts/PageContainer";
import AboutImage from "../components/PageParts/AboutImage";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [state] = useState({
    title: "why choose us",
    heading: "about us",
    pageHeading:
      "We believe in our associates, give back to our communities and put the customer first.",
    message:
      "We are a diverse community in which all associates are treated fairly and respectfully, with equal access to opportunities and resources, allowing associates to contribute fully to the company’s success. We foster a culture where everyone can bring their whole selves to work. As our world evolves, we evolve with it by embracing social change, taking action and holding ourselves accountable for creating a happy, healthy, and safe place to work. We are a community of smart, passionate, and committed associates whose creativity, innovation and hard work fuel the world’s most recognized lingerie, apparel and beauty brands.",
  });

  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="etsy , bra , about page"></meta>
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
         </PageContainer>
    </>
  );
};

export default About;
