import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer; // why you return this lol?? ..
  // ... zasada Reducerowa I guess!!!
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    isValid: valueIsValid,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// OLD FILE use-input.js (bez useReducer)

// import { useState } from "react";

// const useInput = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valueIsValid = validateValue(enteredValue);
//   const hasError = !valueIsValid && isTouched;

//   const inputBlurHandler = (event) => {
//     setIsTouched(true);
//   };

//   const valueChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };

//   return {
//     value: enteredValue,
//     hasError,
//     isValid: valueIsValid,
//     inputBlurHandler,
//     valueChangeHandler,
//     reset,
//   };
// };

// export default useInput;
