import { useState, useEffect } from "react";
import { IconButton, Drawer, Navbar, Nav, Stack, useMediaQuery } from "rsuite";
import { FaBars } from "react-icons/fa";
import styles from "@/styles/Navigation.module.css";

type NavigationOption = {
  href: string;
  label: string;
};

const navigationOptions: NavigationOption[] = [
  { label: "Nuestra Iglesia", href: "/acerca-de" },
  { label: "Ministerios", href: "/ministerios" },
];

type NavigationOptionsProps = {
  options: NavigationOption[];
};

const MobileNavigation = ({ options }: NavigationOptionsProps) => {
  const [open, setOpen] = useState<boolean>();

  if (!open) {
    return (
      <Navbar className={`${styles.navigation} ${styles.mobile}`}>
        <Nav>
          <Nav.Item
            className={styles.navigationItem}
            onClick={() => setOpen(true)}
          >
            <IconButton circle icon={<FaBars />} appearance="link" size="lg" />
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
  return (
    <Drawer
      placement="top"
      open={open}
      onClose={() => setOpen(false)}
      closeButton
    >
      <Drawer.Body>
        <Navbar className={`${styles.navigation}`}>
          <Nav>
            <Stack direction="column">
              {options.map(({ label, href }) => (
                <Nav.Item
                  key={href}
                  className={styles.navigationItem}
                  href={href}
                >
                  {label}
                </Nav.Item>
              ))}
            </Stack>
          </Nav>
        </Navbar>
      </Drawer.Body>
    </Drawer>
  );
};

const DesktopNavigation = ({ options }: NavigationOptionsProps) => (
  <Navbar className={`${styles.navigation}`}>
    <Nav>
      {options.map(({ label, href }) => (
        <Nav.Item key={href} className={styles.navigationItem} href={href}>
          {label}
        </Nav.Item>
      ))}
    </Nav>
  </Navbar>
);

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  const [isClient, setIsClient] = useState<boolean>(false);
  const NavigationWrapper =
    isMobile && isClient ? MobileNavigation : DesktopNavigation;

  useEffect(() => {
    setIsClient(true); // Ensures rendering only happens on the client
  }, []);
  return <NavigationWrapper options={navigationOptions} />;
};

export default Navigation;
