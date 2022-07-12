import { useState } from "react";
import kross from "./kross.jpg";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [btnCart, setBtnCart] = useState(true);
  const [detal, setDetal] = useState(false);
  const handleClick = () => {
    setBtnCart(false);
  };

  const handleClickDelete = () => {
    setBtnCart(true);
  };
  const handleDetalDesc = () => {
    setDetal(true);
    console.log(detal);
  };

  const handleClose = () => {
    setDetal(false);
    console.log(detal);
  };
  return (
    <div className="app">
      <div className="divImage">
        <img className="img" src={kross} alt="kross" />
      </div>
      <div className="main">
        <div className="priceName">
          <p className="nameProduct">Nike Sneaker</p>
          <p className="price">$120</p>
        </div>
        <div className="divDetalDescription">
          <button className="btnDetal" onClick={handleDetalDesc}>
            Детали
          </button>
          {detal ? (
            <div className="detalDesc">
              <AiOutlineClose className="close" onClick={handleClose} />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              dignissimos.
            </div>
          ) : null}
        </div>
      </div>
      <hr></hr>
      <div className="foot">
        <div className="descriptionDiv">
          <p className="descText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            dignissimos.
          </p>
        </div>
        <button className="btnCart" onClick={handleClick}>
          {btnCart ? "Добавить в корзину" : "Уже в корзине"}
        </button>
        {!btnCart && (
          <button className="btnDelete" onClick={handleClickDelete}>
            Удалить из корзины
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
