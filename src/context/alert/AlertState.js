import React, {useReducer} from 'react';
import {alertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(alertReducer, {visible: false})

  const show = (text, type = 'warning') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type}
    })
  }

  const hide = () => dispatch({type: HIDE_ALERT})

  return (
    <alertContext.provider value={{
      show, hide,
      alert: state
    }}>
      {children}
    </alertContext.provider>
  )
}