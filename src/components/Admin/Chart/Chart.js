import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <>
      <div className="chart">
        <h3 className="chart__title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />}
            <XAxis dataKey="name" style={{}} stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <YAxis />
            <Legend />
           <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
