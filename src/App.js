import { useState } from "react";
import "./App.css";

function App() {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [highValue, sethighValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [counter, setCounter] = useState(0);

  const clickHandler = (rowIndex, colIndex) => {
    let newMatrix = [...matrix];
    matrix[rowIndex][colIndex] = counter + 1;
    setCounter(counter + 1);
    setSecondValue(highValue);
    sethighValue(rowIndex + "" + colIndex);
    setMatrix(newMatrix);
  };

  return (
    <div className="App">
      {matrix.map((row, index) => (
        <div className="row" key={index}>
          {row.map((col, colIndex) => (
            <div
              key={index + colIndex}
              className={`col ${
                (index + "" + colIndex === highValue ||
                  index + "" + colIndex === secondValue) &&
                "red"
              }`}
              onClick={(e) => clickHandler(index, colIndex)}
            >
              {col !== 0 && `Box ${col}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
