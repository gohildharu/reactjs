import React from 'react'

function Row() {
  return (
<div className="row text-center w-100">
  <div className="col-md-3 col-6">
    <span className="fs-1 d-block fw-bold text-success">150</span>
    <span className="fs-3">LUXURY ROOMS</span>
  </div>

  <div className="col-md-3 col-6 mb-3">
    <span className="fs-1 d-block fw-bold text-success">5</span>
    <span className="fs-3">STAR RATING</span>
  </div>

  <div className="col-md-3 col-6 mb-3">
    <span className="fs-1 d-block fw-bold text-success">24</span>
    <span className="fs-3">HOUR SERVICE</span>
  </div>

  <div className="col-md-3 col-6 mb-3">
    <span className="fs-1 d-block fw-bold text-success">98</span>
    <span className="fs-3">GUEST SATISFACTION</span>
  </div>
</div>

  )
}

export default Row;

