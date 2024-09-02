import Logo from "./Logo";
import styles from "./Sidebar.module.css"
 function SideBar ()  {
  return (
    <div className={styles.sidebar}>
        <Logo/>
    </div>
  );
};

export default SideBar;