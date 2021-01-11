import React, {useContext} from 'react'
import {alertContext} from "../context/alert/alertContext";

export const Alert = () => {
  const {alert, hide} = useContext(alertContext)

  if(!alert) {
    return null
  }

  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Внимание!</strong>
      {alert.text}
      <button onClick={hide} type="button" className="btn-close" aria-label="Close">

      </button>
    </div>
  )
}