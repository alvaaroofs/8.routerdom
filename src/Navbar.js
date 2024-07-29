import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
};

//Importante sustituir lo de menu por profile, ya que si mantenemos la ruta de menu, nos dara error