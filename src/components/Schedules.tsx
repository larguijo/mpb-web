import { Grid, Container, Col, Row, Text, Panel } from "rsuite";
import styles from "@/styles/Schedules.module.css";

type Event = {
  day: string;
  eventName: string;
  time: string;
};

type SchedulesProps = {
  title: string;
  events: Event[];
  className?: string;
};

const Schedules = ({ title, events = [], className }: SchedulesProps) => {
  return (
    <Container className={className}>
      <Grid className="container">
        <Row>
          <Col xs={24} className="container-title">
            <Text as="h2">{title}</Text>
          </Col>
        </Row>
        <Row>
          {events.map(({ day, eventName, time }) => (
            <Col key={day} sm={24} md={12} lg={8}>
              <Panel header={day} shaded bordered className={styles.schedule}>
                <Text size="md" weight="bold">
                  {eventName}
                </Text>
                <Text size="md" weight="semibold">
                  {time}
                </Text>
              </Panel>
            </Col>
          ))}
        </Row>
      </Grid>
    </Container>
  );
};

export default Schedules;
