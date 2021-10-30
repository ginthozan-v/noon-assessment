import HeaderItem from "./HeaderItem";
import { Home, Favorite } from "@mui/icons-material";

function Header() {
  return (
    <header>
      <div className="header">
        <HeaderItem title="Home" Icon={Home} />
        <HeaderItem title="Favorite" Icon={Favorite} />
      </div>
    </header>
  );
}

export default Header;
