import { Container, Grid, Row, Col, Text, Stack } from "rsuite";
import Social from "./Social";

type IntroTextProps = {
  bannerText: string;
  bannerSubtext: string;
  social: {
    facebook: string;
    instagram: string;
  };
  className?: string;
};

const IntroText = ({
  bannerText,
  bannerSubtext,
  social: { facebook, instagram },
  className
}: IntroTextProps) => (
  <Container className={className}>
    <Grid className="container">
      <Row>
        <Col xs={24}>
          <Stack
            direction="column"
            spacing={40}
            style={{ paddingTop: "60px", paddingBottom: "20px" }}
          >
            <Text size="1.5em" as="p" weight="bold" align="center">
              {bannerText}
            </Text>
            <Text size="1.5em" as="p" weight="bold" align="center">
              {bannerSubtext}
            </Text>
            <Social facebook={facebook} instagram={instagram} />
          </Stack>
        </Col>
      </Row>
    </Grid>
  </Container>
);

export default IntroText;
