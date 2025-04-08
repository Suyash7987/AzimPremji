import React from 'react';
import './Part1.css';

function Part1() {
 return (
    <div className="container py-4">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-8">
          <div className="card mb-4">
            <img id="Img1"src="./Image1.png" alt="Main" className="card-img-top" />
            <div className="card-body">
              <span className="badge bg-light text-dark">CLASSROOM</span>
              <h5 className="card-title mt-2">Montessori Approach...</h5>
              <p className="card-text">
                <small className="text-muted">by Kshama Chakravarthy | 17 Nov 2024</small>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <img id='Img2' src="./Image2.png" alt="Card1" className="card-img-top" />
                <div className="card-body">
                  <span className="badge bg-light text-dark">CLASSROOM</span>
                  <h6 className="card-title">My Pedagogical Experience...</h6>
                  <p className="card-text">
                    <small className="text-muted">by Kshama Chakravarthy | 17 Nov 2024</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-3">
                <img id='Img3' src="./Iamge3.png" alt="Card2" className="card-img-top" />
                <div className="card-body">
                  <span className="badge bg-light text-dark">FEATURES</span>
                  <h6 className="card-title">Fun with Fractions</h6>
                  <p className="card-text">
                    <small className="text-muted">by Kshama Chakravarthy | 17 Nov 2024</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-4">
          {/* Editor's Note */}
          <div className="card mb-3 p-3" style={{ backgroundColor: '#d4ecfb' }}>
            <h6 className="text-uppercase text-primary">From the Editor</h6>
            <p className="mb-1">
              <strong>The Beauty of Mathematical Exploration</strong>
            </p>
            <p>Mathematics is a language of patterns...</p>
            <a href="#" className="text-decoration-underline">Read More</a>
          </div>

          {/* Announcement */}
          <div className="card mb-3 p-3" style={{ backgroundColor: '#fde9e0' }}>
            <span className="badge bg-warning text-dark mb-2">Announcement</span>
            <strong>5th National Conference of MTA(I)</strong>
            <p className="mb-0">Jointly organized... 9th to 11th May 2025</p>
          </div>

          {/* Small Article */}
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-4">
                <img id='Img4' src="./Image4.png" className="img-fluid rounded-start" alt="Small" />
              </div>
              <div className="col-8">
                <div className="card-body p-2">
                  <span className="badge bg-success">The Joy of Mathematics</span>
                  <h6 className="card-title mb-0">Fractions in Bottles!</h6>
                  <small className="text-muted">by Kshama Chakravarthy | 17 Nov 2024</small>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* All Articles Button */}
      <div className="row mt-4">
        <div className="col text-center">
          <button className="btn btn-dark">
            All Articles <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Part1;
