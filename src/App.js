import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/actions/add";
import { subtract } from "./redux/actions/subtract";

function App() {
  const count = useSelector((state) => state.calcReducer.count);
  const dispatch = useDispatch();

  const handleAddCount = () => dispatch(add(1));
  const handleSubtractCount = () => dispatch(subtract(1));

  const [value, setValue] = useState(5);
  const handleFormData = (e) => setValue(e.target.value);
  const handleFormDataAddCount = () => dispatch(add(value));
  const handleFormDataSubtractCount = () => dispatch(subtract(value));

  console.log(value);

  return (
    <div>
      <input type="text" onChange={handleFormData} />
      <button onClick={handleFormDataSubtractCount}>
        Add input to Total Value
      </button>
      <button onClick={handleSubtractCount}>-</button>
      <span>{count}</span>
      <button onClick={handleAddCount}>+</button>
      <input type="text" onChange={handleFormData} />
      <button onClick={handleFormDataAddCount}>Add input to Total Value</button>
    </div>
  );
}

export default App;
