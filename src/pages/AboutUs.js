import React from "react";
import "../styles.css"; // Assuming styles.css contains general styles

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-image WasteTitleImage" style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <h1 className="mb-0 WasteTitle" style={{ fontSize: '3rem' }}>About Us</h1>
          </div>
        </div>
      </div>

      <div className="main container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">Our Mission</h2>
            <p className="lead text-center mb-5">
              EcoBites is dedicated to combating food waste by creating a bridge between local businesses with surplus food and consumers looking for great deals. We believe that every meal saved is a step towards a more sustainable future.
            </p>

            <h2 className="text-center mb-4">Our Vision</h2>
            <p className="text-center mb-5">
              To build a community where food waste is minimized, resources are optimized, and delicious food is enjoyed by everyone, regardless of its journey from farm to fork.
            </p>

            <h2 className="text-center mb-4">Meet the Team</h2>
            <div className="row text-center">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Dong Li</h5>
                    <p className="card-text">Infrastructure, CI/CD Deployment, Git Management & Footer Component</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Alyssa Lilly</h5>
                    <p className="card-text">UI/UX Design, Home Page & Visual Layout</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Rujing Xu</h5>
                    <p className="card-text">API Integration & Data Management</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Noah Montgomery</h5>
                    <p className="card-text">Frontend Support, Quality Assurance & Documentation</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            <h2 className="text-center mb-4">Join Us!</h2>
            <p className="text-center">
              Become a part of the EcoBites community today. Whether you're a business looking to reduce waste or a consumer eager to discover great food at a great price, together we can make a difference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}