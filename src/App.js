import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  // useSelectorは、アクセスするためのreduxのhooks。ここのcounterは、store.jsのcounter
  const dispatch = useDispatch(); // actionをstoreに伝えるためのhooks

  const [incrementAmount, setIncrementAmount] = useState(2);
  return (
    <div className="App">
      <h1>カウント数: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
      <div>
        <p style={{ display: "block" }}>
          1カウントで追加したい数を入力してください
        </p>
        <input
          onChange={(e) => setIncrementAmount(e.target.value)}
          value={incrementAmount}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          追加
        </button>
      </div>
    </div>
  );
}

export default App;
