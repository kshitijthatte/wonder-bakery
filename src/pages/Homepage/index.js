import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Footer from "../../components/Footer";
import BestSelling from "./BestSelling";
import Category from "./Category";
import Review from "./Review";

const reviews = [
  {
    review: `Such a gem! Not only are the pastries / donuts incredible, you
can't beat the prices and supporting local! Order ASAP!`,
    author: "Kurt Wanger",
    id: 1,
  },
  {
    review: `This bakery is a slice of heaven. All the pastries are beautiful and delicious, and the menu is fantastic, too.`,
    author: "Michael Scarn",
    id: 2,
  },
  {
    review: `This bakery is a slice of heaven. The cake was absolutely perfect and was super moist but the buttercream stole the show!`,
    author: "Regina Phalange",
    id: 3,
  },
];

const bestSellingItems = [
  {
    itemName: "Glazed Doughnuts",
    imgURL: "https://source.unsplash.com/DmK5aEw6Tmc",
    id: 1,
  },
  {
    itemName: "Chocochip Cookies",
    imgURL: "https://source.unsplash.com/04yMqTmUeHQ",
    id: 2,
  },
  {
    itemName: "Mocha Cupcake",
    imgURL: "https://source.unsplash.com/B6kBrzkl3YQ",
    id: 3,
  },
];

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("ERROR", error);
      }
    })();
  }, []);

  return (
    <>
      <main className="nav-fixed-adjust">
        <div className="landing-img">
          <div className="landing-actions">
            <h1>Wonder Bakery</h1>
            <p className="text-md">Fresh baked goods made with love</p>
            {/* <button className="btn btn-primary">Order Now</button> */}
            <Link to="/products" className="btn btn-primary">Order Now</Link>
          </div>
        </div>
        <section className="homepage-section">
          <h2>Categories</h2>
          <div className="grid grid-col-4 categories">
            {categories.map(({ categoryName, imgURL, id }) => (
              <Category key={id} categoryName={categoryName} imgURL={imgURL} />
            ))}
          </div>
        </section>
        <section className="homepage-section">
          <h2>Hot Selling Items</h2>
          <div className="grid grid-col-3 best-selling">
            {bestSellingItems.map(({ itemName, imgURL }) => (
              <BestSelling itemName={itemName} imgURL={imgURL} />
            ))}
          </div>
        </section>
        <section className="homepage-section">
          <h2>Hear From Our Customers</h2>
          <div className="grid grid-col-3 reviews">
            {reviews.map(({ review, author }) => (
              <Review review={review} author={author} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
