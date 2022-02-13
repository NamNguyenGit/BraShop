import { useContext } from "react";
import ColorsContext from "../../context/ColorsContext";
import { BsStarFill, BsStar } from "react-icons/bs";
import ColorList from "./ColorList";

const Colors = () => {
  const {
    ColorsData: { color },
  } = useContext(ColorsContext);

  return (
    <>
      <div className="colorList">
        {color.map((color) => (
          <ColorList color={color} key={color.id} />
        ))}
      </div>
    </>
  );
};

export default Colors;
