import TestimonialCard from "./TestimonialCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import restaurantFoodImage from "../assets/restaurant-food.jpg";
import bruschettaImage from "../assets/bruschetta.jpg";
import greekSaladImage from "../assets/greek-salad.jpg";
import lemonDessertImage from "../assets/lemon-dessert.jpg";
import customer1Image from "../assets/customer1.jpg";
import customer2Image from "../assets/customer2.jpg";
import customer3Image from "../assets/customer3.jpg";
import customer4Image from "../assets/customer4.jpg";
import chefsMarioAndAdrianAImage from '../assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from '../assets/chefs-mario-and-adrian_b.jpg';
import "../assets/Home.css";


const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];


const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container grid">
          <div className="hero-information">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link className="button-primary" to="/reservation">
              Reserve a table
            </Link>
          </div>
          <img
            className="hero-image"
            src={restaurantFoodImage}
            alt="Restaurant food"
          />
        </div>
      </section>

      <section className="container grid week-specials">
        <div className="week-specials-header">
          <h2>This week specials!</h2>
          <Link className="button-primary" to="/under-construction">
            Online Menu
          </Link>
        </div>

        <article className="meal-card">
          <div className="meal-card-image">
            <img src={greekSaladImage} alt="greek salad" />
          </div>
          <div className="meal-card-header">
            <h3>Greek Salad</h3>
            <span>$12.99</span>
          </div>
          <div className="meal-card-body-footer">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <Link to="reservation">
              Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
          </div>
        </article>

        <article className="meal-card">
          <div className="meal-card-image">
            <img src={bruschettaImage} alt="greek salad" />
          </div>
          <div className="meal-card-header">
            <h3>Bruschetta</h3>
            <span>$5.99</span>
          </div>
          <div className="meal-card-body-footer">
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <Link to="reservation">
              Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
          </div>
        </article>

        <article className="meal-card">
          <div className="meal-card-image">
            <img src={lemonDessertImage} alt="greek salad" />
          </div>
          <div className="meal-card-header">
            <h3>Lemon Dessert</h3>
            <span>$5.00</span>
          </div>
          <div className="meal-card-body-footer">
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <Link to="reservation">
              Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
          </div>
        </article>
      </section>

      <section className="testimonials">
        <div className="container grid">
          <h2>What people say about us!</h2>
          {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
          
        </div>
      </section>

      <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum. Sed ut 
          perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
          inventore veritatis et quasi architecto beatae vitae dicta sunt 
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
          voluptatem sequi nesciunt.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
    </>
  );
};

export default Home;
