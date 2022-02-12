import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="bra shop not found " />
      </Helmet>
      <h1>Not Found</h1>
    </>
  );
};

export default NotFound;
