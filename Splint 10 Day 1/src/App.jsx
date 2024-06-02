import React from 'react';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import { useReducer } from 'react';
import reducer, { initialState } from './store/reducers.jsx';
import {
  changeOperation,
  clearDisplay,
  typeToScreen,
  memoryAdd,
  memoryClear,
  memoryRecall,
  calculateResult,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = (event) => {
    dispatch(typeToScreen(event.target.value));
  };
  const handleOperationClick = (event) => {
    dispatch(changeOperation(event.target.value));
  };
  const handleClearClick = () => {
    dispatch(clearDisplay());
  };
  const handleMemoryAddClick = () => {
    dispatch(memoryAdd());
  };
  const handleMemoryClearClick = () => {
    dispatch(memoryClear());
  };
  const handleMemoryRecallClick = () => {
    dispatch(memoryRecall());
  };
  const handleCalculateClick = () => {
    dispatch(calculateResult());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleMemoryAddClick} />
              <CalcButton value={'MR'} onClick={handleMemoryRecallClick} />
              <CalcButton value={'MC'} onClick={handleMemoryClearClick} />
            </div>
            <div className="row">
              <CalcButton onClick={handleButtonClick} value={1} />
              <CalcButton onClick={handleButtonClick} value={2} />
              <CalcButton onClick={handleButtonClick} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleButtonClick} value={4} />
              <CalcButton onClick={handleButtonClick} value={5} />
              <CalcButton onClick={handleButtonClick} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleButtonClick} value={7} />
              <CalcButton onClick={handleButtonClick} value={8} />
              <CalcButton onClick={handleButtonClick} value={9} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleOperationClick} />
              <CalcButton onClick={handleButtonClick} value={0} />
              <CalcButton value={'-'} onClick={handleOperationClick} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleOperationClick} />
              <CalcButton value={'/'} onClick={handleOperationClick} />
              <CalcButton value={'CE'} onClick={handleClearClick} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleCalculateClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
