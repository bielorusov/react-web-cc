import React from 'react'

// Style guide RFC: https://getbootstrap.com/docs/5.0/components/spinners/
export const Loader = () => (
  <div className="text-center">
    <div className="spinner-border text-success">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-border text-warning">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-border text-primary">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)