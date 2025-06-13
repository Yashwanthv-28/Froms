import React from 'react'

export default function Carousel() {
  return (
    <div className="container-fluid">

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://picsum.photos/400/200?random=1" className="d-block w-100" alt="Random Image 1"style={{ borderRadius: "5px" }} />
  </div>
  <div className="carousel-item">
    <img src="https://picsum.photos/400/200?random=2" className="d-block w-100" alt="Random Image 2" style={{ borderRadius: "5px" }}/>
  </div>
  <div className="carousel-item">
    <img src="https://picsum.photos/400/200?random=3" className="d-block w-100" alt="Random Image 3" style={{ borderRadius: "5px" }}/>
  </div>
</div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
