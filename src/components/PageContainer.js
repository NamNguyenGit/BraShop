import Header from "./Header";

const PageContainer = ({data}) => {
    return ( 
        <>
        <Header heading = {data.heading} />
        </>
     );
}
 
export default PageContainer;