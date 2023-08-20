import React from "react";
import "./HomePage.css";
import Dog1 from "../../assests/images/dog-1.png";
import Dog2 from "../../assests/images/dog-2.jpg";
import Dog3 from "../../assests/images/dog-3.jpg";
import Dog4 from "../../assests/images/dog-4.png";
import Dog5 from "../../assests/images/dog-5.jpg";
import Dog6 from "../../assests/images/dog-6.png";
import Dog7 from "../../assests/images/dog-7.jpg";
import Cat1 from "../../assests/images/cat-1.jpg";
import Cat2 from "../../assests/images/cat-2.jpg";
import Pet1 from "../../assests/images/pet1.png";
import Pet2 from "../../assests/images/pet2.png";

const imagesData = [Dog1, Dog2, Dog3, Dog4, Dog5, Dog6, Dog7, Cat1, Cat2, Pet1, Pet2, Dog1];

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to Our Pet Veterinary Shop</h1>
        <p>Your Trusted Partner for Pet Care</p>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          venenatis velit id libero hendrerit, at efficitur erat ullamcorper.
        </p>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Pet Shower</li>
          <li>Nail Cutting</li>
          <li>Surgery</li>
        </ul>
      </section>
      <section className="images">
        {imagesData?.map((data, index) => (
          <img src={data} alt={`${index}`} />
        ))}
      </section>
    </div>
  );
};

export default Home;
