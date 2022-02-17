import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
const AboutImage = () => {

    const [state] = useState({
        image: "assets/image/about/24.JPG"
    })

    return ( 
        <div className="pageContent__image">
            <LazyLoadImage src={state.image} alt={state.image} />
        </div>
     );
}
 
export default AboutImage;