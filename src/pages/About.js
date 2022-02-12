import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Our Company</title>
        <meta
          name="description"
          content="bra shop about page"
        />
      </Helmet>

      <button type="button" className="btn btn-primary">
        2
      </button>
    </>
  );
};

export default About;
