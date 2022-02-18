import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import userData from "../Data/ChartData" ;
import WidgetLg from "../WidgetLg/WidgetLg";
import WidgetSm from "../WidgetSm/WidgetSm";
const Homepage = () => {
    return ( 
        <>
        <div className="home">
            <Featured />
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid/>
        <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
        </div>
        </div>
        </>
     );
}
 
export default Homepage;