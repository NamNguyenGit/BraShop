const ColorList = ({ color }) => {
  return (
    <>
    <ul>
        <li 
        style={{ backgroundColor: color.color }}></li>
    </ul>
      
    </>
  );
};

export default ColorList;
