import React from "react";
import classes from "./Input.module.css";
// RE-USABLE INPUT
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label}</label>
      <input ref={ref} {...props.input}></input>
      {/*ten syntax {...} oznacza
    że dajemy dla inputa wszystko co dostaniemy w propsie
    czyli np min, max, id (np wartosci ktorych nie musimy tutaj uzyc) 
    czyli wszystko z props.input (to obiekt kluczy i wartosci!)
    */}
    </div>
  );
});

export default Input;
