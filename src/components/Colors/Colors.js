import { useContext } from "react";
import ColorsContext from "../../context/ColorsContext";

const Colors = () => {
  const {
    ColorsData: { color },
  } = useContext(ColorsContext);

  console.log(color)

  return(
    <h1>{color.name}</h1>
  )
};

export default Colors;
