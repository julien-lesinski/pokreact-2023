import { Link } from "react-router-dom";
import "./Header.css";
import { RandomColorText } from "../../atoms/RandomColorText";

export function Header() {
  return (
    <div className="flex justify-start py-4 px-8 gap-8 bg-gray-200 dark:bg-gray-600">
      <RandomColorText color1="white" color2="lightpink"></RandomColorText>
      <Link className="Header__link" to="/">
        Home
      </Link>
      <Link className="Header__link" to="/details">
        Details
      </Link>
    </div>
  );
}
