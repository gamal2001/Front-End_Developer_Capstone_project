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
import "../assets/Home.css";

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
    </>
  );
};

export default Home;
