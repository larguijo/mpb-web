import { IconButton, ButtonToolbar } from "rsuite";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "@/styles/Social.module.css";

type SocialProps = {
  facebook: string;
  instagram: string;
};

function Social({ facebook, instagram }: SocialProps) {
  return (
    <ButtonToolbar className={styles.social}>
      <IconButton
        circle
        icon={<FaFacebook />}
        appearance="link"
        size="lg"
        href={facebook}
      />
      <IconButton
        circle
        icon={<FaInstagram />}
        appearance="subtle"
        size="lg"
        href={instagram}
      />
    </ButtonToolbar>
  );
}

export default Social;
