import React from 'react';

function HowItWorksPage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center mb-4">How EcoBites Works</h2>
          <p className="lead text-center">
            EcoBites connects users with local businesses selling surplus food at discounted prices, fighting food waste one meal at a time.
          </p>

          <hr className="my-5" />

          <div className="row mb-5">
            <div className="col-md-6">
              <h3>For Users: Save Money & Food</h3>
              <p>
                <strong>1. Browse Nearby Stores:</strong> Discover local bakeries, restaurants, and grocery stores on the EcoBites platform.
              </p>
              <p>
                <strong>2. Reserve Your Magic Bag:</strong> Find "Magic Bags" filled with delicious, surplus food available for a fraction of the original price. Reserve your bag directly through the app.
              </p>
              <p>
                <strong>3. Pick Up & Enjoy:</strong> Head to the store during the designated pickup window, collect your surprise bag, and enjoy great food while helping the planet!
              </p>
            </div>
            <div className="col-md-6">
              <h3>For Businesses: Reduce Waste & Gain Customers</h3>
              <p>
                <strong>1. List Your Surplus:</strong> Easily list your unsold food items at the end of the day or during off-peak hours on the EcoBites platform.
              </p>
              <p>
                <strong>2. Reach New Customers:</strong> Attract new customers who are looking for great deals and are passionate about sustainability.
              </p>
              <p>
                <strong>3. Fight Food Waste:</strong> Contribute to a greener planet by ensuring your delicious food doesn't go to waste.
              </p>
            </div>
          </div>

          <hr className="my-5" />

          <h3 className="text-center mb-3">Why EcoBites?</h3>
          <p className="text-center">
            Every year, a significant amount of perfectly good food is thrown away. EcoBites provides a win-win solution: users get amazing deals on quality food, and businesses reduce waste and recover costs. Join the EcoBites community today and make a difference!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage;
