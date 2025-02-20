import { Message } from "rsuite";
type UnderConstructionProps = {
  message: string;
};

const UnderConstruction = ({ message }: UnderConstructionProps) => {
  return (
    <Message showIcon type="info">
      <strong>Pagina en Construccion!</strong> {message}
    </Message>
  );
};

export default UnderConstruction;
