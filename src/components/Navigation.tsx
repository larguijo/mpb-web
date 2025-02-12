import { Navbar, Nav } from "rsuite";
import styles from "@/styles/Navigation.module.css";

const navigationOptions = [
  { label: "Nuestra Iglesia", href: "/acerca-de" },
  { label: "Ministerios", href: "/ministerios" },
  { label: "Actividades", href: "/calendario" },
  { label: "Visitanos", href: "acerca-de" },
];
const Navigation = () => {
  return (
    <Navbar className={styles.navigation}>
      <Nav>
        {navigationOptions.map(({ label, href }) => (
          <Nav.Item key={href} className={styles.navigationItem} href={href}>
            {label}
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
