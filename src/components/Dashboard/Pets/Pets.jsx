import React from "react";
import "./Pets.css";
import Dog1 from "../../../assests/images/dog-1.png";
import Dog2 from "../../../assests/images/dog-2.jpg";
import Dog3 from "../../../assests/images/dog-3.jpg";
import Dog4 from "../../../assests/images/dog-4.png";
import Dog5 from "../../../assests/images/dog-5.jpg";
import Dog6 from "../../../assests/images/dog-6.png";
import Dog7 from "../../../assests/images/dog-7.jpg";
import Cat1 from "../../../assests/images/cat-1.jpg";
import Cat2 from "../../../assests/images/cat-2.jpg";

const PetsSection = () => {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      owner: "Alice",
      email: "alice@example.com",
      image: Dog1,
    },
    {
      id: 2,
      name: "Luna",
      owner: "Bob",
      email: "bob@example.com",
      image: Cat1,
    },
    {
      id: 3,
      name: "Charlie",
      owner: "Eve",
      email: "eve@example.com",
      image: Dog2,
    },
    {
      id: 4,
      name: "Milo",
      owner: "Grace",
      email: "grace@example.com",
      image: Dog3,
    },
    {
      id: 5,
      name: "Bailey",
      owner: "Hank",
      email: "hank@example.com",
      image: Dog4,
    },
    {
      id: 6,
      name: "Max",
      owner: "Jane",
      email: "jane@example.com",
      image: Dog5,
    },
    {
      id: 7,
      name: "Mark",
      owner: "Rony",
      email: "Rony@example.com",
      image: Cat2,
    },
    {
      id: 8,
      name: "Rocky",
      owner: "Kevin",
      email: "kevin@example.com",
      image: Dog6,
    },
    {
      id: 9,
      name: "Nels",
      owner: "Tom",
      email: "tom@example.com",
      image: Dog7,
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pets</h1>
      <div className="pets-section">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <div className="pet-avatar">
              {pet.image ? (
                <img src={pet.image} alt={pet.name} />
              ) : (
                pet.name.charAt(0)
              )}
            </div>
            <div className="pet-details">
              <h3 className="pet-name">{pet.name}</h3>
              <p className="pet-owner">Owner: {pet.owner}</p>
              <p className="pet-email">Email: {pet.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PetsSection;
