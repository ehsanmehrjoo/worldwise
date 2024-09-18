 
import SideBar from "../Component/SideBar.";
import Map from "../Component/Map.";
import styles from "./AppLayout.module.css";
import User from "/src/Component/User";
 function AppLayout ()  {
  return (
    <div className={styles.app}>
        <SideBar />
        <Map />
        <User />
    </div>
  );
};

export default AppLayout;