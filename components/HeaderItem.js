import { useRouter } from "next/router";

function HeaderItem({ title, Icon }) {
  const router = useRouter();
  const handleRoute = () => {
    {
      title === "Favorite" ? router.push("/FavoritePage") : router.push("/");
    }
  };
  return (
    <nav className="header__item">
      <div onClick={handleRoute}>
        <Icon />
        <p>{title}</p>
      </div>
    </nav>
  );
}

export default HeaderItem;
