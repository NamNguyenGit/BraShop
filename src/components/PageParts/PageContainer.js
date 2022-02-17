import Header from "../Header";
import Footer from "../Footer/Footer";
const PageContainer = ({data, children}) => {
    return ( 
        <>
        <Header heading = {data.heading} />
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="page__content">{children}</div>
                </div>
            </div>
        </div>

        <Footer />
        </>
     );
}
 
export default PageContainer;