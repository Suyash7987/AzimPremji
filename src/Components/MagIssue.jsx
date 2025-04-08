import React from "react";

const magazines = [
  {
    img: "./magazine1.png",
    title: "Mathematics! Love to learn it, learn to love it",
    issue: "Issue 20, November 2024",
    date: "15 Nov 2024",
  },
  {
    img: "./magazine2.png",
    title: "Go fly a kite - the joy of learning mathematics",
    issue: "Issue 19, July 2024",
    date: "20 June 2024",
  },
  {
    img: "./magazine3.png",
    title: "The Point of Mathematics",
    issue: "Issue 18, July 2024",
    date: "10 March 2024",
  },
  {
    img: "./magazine4.png",
    title: "Reading between the Lines",
    issue: "Issue 18, July 2024",
    date: "10 March 2024",
  },
];

function MagazineIssues() {
  return (
    <div className="container my-5 py-5" style={{ minHeight: "70vh" }}>
      <h5 className="text-uppercase fw-bold mb-4 text-left">Magazine Issues</h5>

      {/* Grid layout for large screens */}
      <div className="d-none d-md-flex row mt-4">
        {magazines.map((item, index) => (
          <div className="col-md-3 mb-5" key={index}>
            <div>
              <img src={item.img} alt={item.title} className="img-fluid mb-3" />
              <p className="mb-1 fw-semibold">{item.title}</p>
              <p className="text-muted small mb-0">
                — {item.issue} • {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel for small and medium screens */}
      <div
        id="magazineCarousel"
        className="carousel slide d-md-none mt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {magazines.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="text-center px-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid mb-3"
                />
                <p className="fw-semibold">{item.title}</p>
                <p className="text-muted small mb-0">
                  — {item.issue} • {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#magazineCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#magazineCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* All Magazines Button */}
      <div className="text-center mt-5">
        <button className="btn btn-dark px-4 py-2">
          ALL MAGAZINES <i className="ri-arrow-right-line ms-2"></i>
        </button>
      </div>
    </div>
  );
}

export default MagazineIssues;
