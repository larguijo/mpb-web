import {
  Container,
  Grid,
  Row,
  Col,
  Text,
  TagGroup,
  Tag,
  TagProps,
  Stack,
} from "rsuite";
import MapComponent from "./MapComponent";

type Route = {
  route: string;
  color: string;
};

type AddressProps = {
  className?: string;
  title: string;
  address: string;
  mapLink: string;
  mapAlt: string;
  mapImg: string;
  routesTitle: string;
  routesText: string;
  routes: Route[];
};

const Address = ({
  className,
  title,
  address,
  mapLink,
  mapAlt,
  mapImg,
  routesTitle,
  routesText,
  routes,
}: AddressProps) => {
  return (
    <Container className={className}>
      <Grid className="container">
        <Row>
          <Col xs={24} className="container-title">
            <Text as="h2">{title}</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={12}>
            <Text size="md" weight="semibold" as="h2">
              {address}
            </Text>
            <MapComponent src={mapImg} alt={mapAlt} href={mapLink} />
          </Col>
          <Col xs={24} md={12}>
            <Stack direction="column" spacing={20}>
              <Text size="xl" weight="bold">
                {routesTitle}
              </Text>
              <Text size="md" weight="semibold">
                {routesText}
              </Text>
              <TagGroup>
                {routes.map((route) => (
                  <Tag
                    key={route.route}
                    color={route.color as TagProps["color"]}
                    size="lg"
                  >
                    {route.route}
                  </Tag>
                ))}
              </TagGroup>
            </Stack>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Address;
