import { MenuBar } from "components/MenuBar";
import ProtectedComponent from "components/Protected/Component";
import { useAppSelector } from "helpers/redux";
import { roledMenuBarOptions, RoledMenuBarOptions } from "types/User";

import Selector from "../Selector";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { userData } = useAppSelector(state => state.user);

  return (
    <nav className={styles.navbar}>
      <ProtectedComponent component={<MenuBar barOptions={roledMenuBarOptions[userData!.role as unknown as keyof RoledMenuBarOptions]} />} />
      <Selector />
    </nav>
  );
};

export default Navbar;
