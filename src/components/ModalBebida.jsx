import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { handleModalClick, modal, receta, cargando } = useBebidas();

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            <span className="font-weight-bold">{receta[`strIngredient${i}`]}: </span>
            {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

  return (
    !cargando && (<Modal show={modal} onHide={handleModalClick}>
      <Image
        src={receta.strDrinkThumb}
        alt={`Imagen de receta ${receta.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Instrucciónes</h2>
          <p>{receta.strInstructions}</p>
          <h2>Ingredientes y cantidades</h2>
          {mostrarIngredientes()}
        </div>
      </Modal.Body>
    </Modal>)
  );
};

export default ModalBebida;
