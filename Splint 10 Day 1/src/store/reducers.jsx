import {
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  TYPE_TO_SCREEN,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  CALCULATE_RESULT,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
};

export const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return num1;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_OPERATION:
      return {
        ...state,
        memory: state.total !== 0 ? state.total : state.memory,
        total: 0,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        memory: 0,
        operation: '+',
      };
    case TYPE_TO_SCREEN:
      return {
        ...state,
        total:
          state.total == 0 && action.payload != 0
            ? action.payload.toString()
            : state.total == 0 && action.payload == 0
            ? state.total.toString()
            : state.total.toString() + action.payload.toString(),
      };
    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };
    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };
    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory.toString(),
      };
    case CALCULATE_RESULT:
      return {
        ...state,
        total: calculateResult(
          Number(state.memory),
          Number(state.total),
          state.operation
        ),
        memory: 0,
        operation: '+',
      };
    default:
      return state;
  }
};

export default reducer;
