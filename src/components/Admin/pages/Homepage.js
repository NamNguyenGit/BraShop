import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import userData from "../Data/ChartData" ;
const Homepage = () => {
    return ( 
        <>
        <div className="home">
            <Featured />
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid/>
        </div>
        </>
     );
}
 
export default Homepage;