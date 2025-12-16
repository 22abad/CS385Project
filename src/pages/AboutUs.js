import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="container mt-5 pt-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold text-success">About EcoBites</h1>
          <p className="lead text-muted">
            Connecting communities to fight food waste, save money, and protect
            our planet.
          </p>
          <Link to="/browse" className="btn btn-success btn-lg mt-3">
            Start Saving Food
          </Link>
        </div>
        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Fresh vegetables and fruits"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="row mb-5 text-center">
        <div className="col-md-8 mx-auto">
          <h2 className="mb-4">Our Mission</h2>
          <p className="fs-5">
            At EcoBites, we believe that good food should be eaten, not thrown
            away. Every day, delicious, fresh food goes to waste at cafes,
            restaurants, and stores simply because it wasn't sold in time. Our
            mission is to bridge the gap between businesses with surplus food
            and customers who want to rescue it at a great price.
          </p>
        </div>
      </div>

      {/* Features / Values */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center p-4">
            <div className="display-4 text-success mb-3">🌍</div>
            <h3 className="h5">Environmental Impact</h3>
            <p className="text-muted">
              Reducing food waste is one of the most effective actions we can
              take to combat climate change.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center p-4">
            <div className="display-4 text-success mb-3">💰</div>
            <h3 className="h5">Save Money</h3>
            <p className="text-muted">
              Get high-quality food for a fraction of the original price. It's a
              win for your wallet.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center p-4">
            <div className="display-4 text-success mb-3">🤝</div>
            <h3 className="h5">Support Local</h3>
            <p className="text-muted">
              Help local businesses reduce their waste costs and connect with
              new customers in the community.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-light p-5 rounded-3 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h3>Our Story</h3>
            <p>
              EcoBites started as a student project at Maynooth University
              (CS385). We noticed how much food was being wasted in our local
              campus cafeterias and nearby towns, while students were looking
              for affordable meal options.
            </p>
            <p>
              We decided to build a platform that makes it easy for everyone to
              participate in the food rescue movement. What began as a simple
              idea has grown into a passionate community of food savers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
