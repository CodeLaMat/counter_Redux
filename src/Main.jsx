import { useSelector, useDispatch } from "react-redux";
import { actions } from "./app/store";

import "./Main.css";

const Main = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementByOne = () => {
    dispatch(actions.incrementByOne());
  };

  const decrementByOne = () => {
    dispatch(actions.decrementByOne());
  };

  const incrementByFive = () => {
    dispatch(actions.incrementByFive(5));
  };
  const decrementByFive = () => {
    dispatch(actions.decrementByFive(5));
  };

  const reset = () => {
    dispatch(actions.reset());
  };

  return (
    <main>
      <div className="counter">
        <h1 className="counterNum">{counter}</h1>
      </div>
      <div className="buttons">
        <button onClick={incrementByFive} type="button">
          Increase five{" "}
        </button>
        <button onClick={incrementByOne} type="button">
          Increase One{" "}
        </button>
        <button onClick={reset} type="button">
          Reset{" "}
        </button>
        <button onClick={decrementByOne} type="button">
          Decrease One{" "}
        </button>
        <button onClick={decrementByFive} type="button">
          Decrease Five{" "}
        </button>
      </div>
    </main>
  );
};

export default Main;
