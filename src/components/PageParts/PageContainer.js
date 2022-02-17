import Header from "../Header";
import Footer from "../Footer/Footer";

const PageContainer = ({data, children}) => {
    return ( 
        <>
        <Header heading={data.title} />
        <div className="pageContent">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">{children}</div>
                    <div className="col-md-6">
                        <div className="pageContent__info">
                            <h2 className="heading">
                                {data.heading}
                            </h2>
                            <h1 className="pageContent__info__heading">
                                {data.pageHeading}
                            </h1>
                            <p className="pageContent__info__msg">
                                {data.message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default PageContainer;