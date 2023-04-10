import React, { useState } from 'react';

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}>
      <div style={{ background: 'white', padding: 20, maxWidth: 500, margin: '100px auto' }}>
        <h2>This is a popup</h2>
        <button onClick={onClose}>Close Popup</button>
      </div>
    </div>
  );
}

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Open Popup</button>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default App;


<BurgerIngredient ingredient={ingredient} onSelect={setCurrentIngredient} key={} />





function BurgerIngredients(props) {
  const { elements, ...otherProps } = props;

  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.box}>
        <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
        <MenuItems {...otherProps} setCurrentIngredient={setCurrentIngredient} setIsOpen={setIsOpen} />
        <ProductContainer elements={elements} setCurrentIngredient={setCurrentIngredient} setIsOpen={setIsOpen} />
      </div>
      {currentIngredient && (
        <Modal header={"test"} handleCloseModal={handleCloseModal} isOpen={isOpen}>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;





function BurgerIngredients(props) {
  const { elements, handleCloseModal, isOpen, ...otherProps } = props;

  const [currentIngredient, setCurrentIngredient] = useState(null);

  function handleCurrentIngredient() {
    setCurrentIngredient(ingredient);
  }

  const firstElement = elements[0];

  return (
    <>
      <div className={styles.box}>
        <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
        <MenuItems {...otherProps} />
        <ProductContainer elements={elements} />

        <BurgerIngredient
          ingredient={firstElement}
          onSelect={setCurrentIngredient}
          key={firstElement._id}
        />

        {/* <BurgerIngredient ingredient={ingredient} onSelect={setCurrentIngredient} key={} /> */}
      </div>

      {currentIngredient && (
        <Modal
          header={"Детали ингредиента"}
          handleCloseModal={handleCloseModal}
          isOpen={isOpen}
        >
          {/* <IngredientDetails ingredient={currentIngredient} /> */}
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;





import styles from "./styles.module.css";
import ErrorMock from "./ErrorMock";

function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleOpenModal() {
    setIsPopupOpen(true);
  }

  function handleCloseModal() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    // Код эффекта

    console.log("start fetch");

    const config = {
      baseUrl: "https://norma.nomoreparties.space/api/ingredients",
      headers: {
        "Content-Type": "application/json",
      },
    };

    async function checkResponse(result) {
      if (result.ok) {
        return await result.json();
      } else {
        throw new Error(`Ошибка: ${result.status}`);
      }
    }

    async function getRequest() {
      const result = await fetch(config.baseUrl, {
        method: "GET",
        headers: config.headers,
      });
      return await checkResponse(result);
    }

    const getState = async () => {
      try {
        const result = await getRequest();
        console.log(result);

        setTimeout(() => {
          setData(result.data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError(err);
      }
    };

    getState();

    // Код сброса
    return () => {
      // отписка от событий, закрытие соединений
    };
  }, []);

  if (error) {
    return <ErrorMock error={error} />;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* отрисовываем главную страницу */}
          <div className={stylesApp.topBox}>
            <AppHeader />
            <main className={stylesApp.box}>
              <BurgerIngredients
                elements={data}
                isOpen={isOpen}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
              />
              <BurgerConstructor
                elements={data}
                isOpen={isOpen}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
              />
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default App;