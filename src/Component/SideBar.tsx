import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css"
function SideBar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p>List of city</p>

            <footer className={styles.footer}>
                <p className={styles.copyright}>© Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
            </footer>
        </div>
    );
};

export default SideBar;