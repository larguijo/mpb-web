import { Grid, Container, Col, Row, Text } from "rsuite";

type VideoContainerProps = {
  videoId: string;
  header: string;
  className?: string;
};

const VideoContainer = ({
  videoId,
  header,
  className,
}: VideoContainerProps) => {
  return (
    <Container className={className}>
      <Grid className="container">
        <Row>
          <Col xs={24} className="container-title">
            <Text as="h2">{header}</Text>
          </Col>
        </Row>
        <Row>
          <Col xs={24} style={{ textAlign: "center" }}>
            <iframe
              width="90%"
              height="300"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={header}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{maxWidth: '600px'}}
            ></iframe>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default VideoContainer;
