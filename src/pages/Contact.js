import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/PageParts/PageContainer";
import ContactForm from "../components/PageParts/ContactForm";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [state] = useState({
    title: "contact us",
    heading: "contact us",
    pageHeading:
      "we'd love to hear from you",
    message:
      "Whether you’re curious about features, a free trial, or even press—we’re ready to answer any and all questions.",
  });
  return (
      <>
      <Helmet>
        <title>Contact page</title>
        <meta name="description" content="etsy , bra , contact page"></meta>
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
      </>
  );
};

export default Contact;
