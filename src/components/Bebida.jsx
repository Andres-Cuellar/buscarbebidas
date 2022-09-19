import { Card, Col, Button } from "react-bootstrap";

const Bebida = ({ bebida }) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button className="w-100 text-uppercase mt-2" variant="danger">
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
