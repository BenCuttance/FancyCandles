import React from "react";
import { useParams } from "react-router-dom";
import BrowseProductList from "../components/ProductList/BrowseProductList";
import "./Category.css";
import Cart from "../components/Cart";

const categories = [
  {
    name: "Candles",
    image: "Candle-bedroom.jpg",
    imageBanner: "home-banner.png",
  },
  {
    name: "Diffusers",
    image: "Candle-bedroom.jpg",
    imageBanner: "home-banner.png",
  },
  { name: "Oils", image: "Candle-bedroom.jpg", imageBanner: "home-banner.png" },
  {
    name: "Gifts",
    image: "Candle-bedroom.jpg",
    imageBanner: "home-banner.png",
  },
  {
    name: "Homewares",
    image: "Candle-bedroom.jpg",
    imageBanner: "home-banner.png",
  },
];

const products = [
  {
    name: "Bedroom Candle",
    description:
      "Transform your bedroom into a cozy oasis with our enchanting Bedroom Candle. Crafted with a soothing blend of lavender and vanilla, this hand-poured soy candle creates an ambiance of relaxation and tranquility. Whether you are winding down after a long day or setting the mood for a peaceful evening, the gentle flicker of this candle will add a touch of warmth to your space. Elevate your bedroom experience with the calming fragrance and gentle glow of our Bedroom Candle.",
    image: "Candle-bedroom.jpg",
    category: categories[0]._id,
    price: 12.99,
    quantity: 500,
  },
  {
    name: "Bianco Bergamot Candle",
    description:
      "Elevate your senses with the luxurious Bianco Bergamot Candle. Infused with the invigorating essence of bergamot oranges, this exquisite soy candle fills your space with a refreshing and uplifting aroma. The sleek and elegant design complements any decor, making it a perfect addition to your home. Light up the Bianco Bergamot Candle to create an inviting atmosphere that revitalizes your surroundings and leaves a lasting impression.",
    image: "Candle-bianco-bergamot.png",
    category: categories[0]._id,
    price: 11.99,
    quantity: 500,
  },
  {
    name: "Boho Candle",
    description:
      "Embrace the free-spirited vibes of our Boho Candle and add a touch of wanderlust to your space. With a unique blend of earthy patchouli, zesty citrus, and warm vanilla, this hand-poured soy candle captures the essence of bohemian living. The artistic jar design adds a boho-chic flair to your décor, making it a statement piece in any room. Ignite the Boho Candle to transport yourself to a realm of relaxation and creativity, where the flickering flame dances to its own rhythm.",
    image: "Candle-boho.jpg",
    category: categories[0]._id,
    price: 18.99,
    quantity: 500,
  },
  {
    name: "Bubble Candle",
    description:
      "Introducing our captivating Bubble Candle – a true modern masterpiece for your living space. Crafted with meticulous attention to detail, this unscented paraffin wax candle features a unique bubbled texture that exudes contemporary elegance. Whether displayed as a standalone art piece or a striking centerpiece, the Bubble Candle effortlessly combines form and function. Illuminate your surroundings with its warm glow, casting enchanting shadows that playfully dance along the textured surface, creating a captivating ambiance.",
    image: "Candle-bubble.jpg",
    category: categories[0]._id,
    price: 19.99,
    quantity: 500,
  },
  {
    name: "Capri Blue Candle",
    description:
      "Indulge in the alluring scents of the Capri Blue Candle collection. Each hand-poured soy wax candle is meticulously crafted to transport you to exotic destinations. From the vibrant energy of tropical fruits to the soothing tranquility of coastal breezes, every fragrance captures a distinct essence. The elegant jar design adds a touch of sophistication to your decor, making these candles as visually pleasing as they are aromatic. Elevate your space with the enchanting fragrances of Capri Blue Candles and create an atmosphere that is both inviting and unforgettable.",
    image: "Candle-capri-blue.jpg",
    category: categories[0]._id,
    price: 24.99,
    quantity: 500,
  },
  {
    name: "Glassed Boho Candle",
    description:
      "Experience the enchanting fusion of style and scent with our Glassed Boho Candle. Encased in a beautifully textured glass jar, this hand-poured soy candle brings bohemian vibes and inviting warmth to any room. The delicate aroma, inspired by earthy sandalwood and blossoming florals, takes you on a sensory journey that soothes the soul. As the flame dances within the unique glass container, intricate patterns playfully dance across your space, adding a touch of artistry to your decor. Elevate your surroundings with the captivating allure of the Glassed Boho Candle.",
    image: "Candle-glassed-boho.jpg",
    category: categories[0]._id,
    price: 18.99,
    quantity: 500,
  },
  {
    name: "Glassed Pearls Candle",
    description:
      "Introducing the exquisite Glassed Pearls Candle – a luminous gem for your living space. Encased in a delicately designed glass jar reminiscent of glistening pearls, this soy wax candle adds a touch of elegance to any room. The soft, sophisticated fragrance profile of delicate florals and subtle musk evokes a sense of serenity and luxury. Illuminate your space with the warm, flickering glow and let the Glassed Pearls Candle be the centerpiece that elevates your ambiance to a realm of refined beauty and tranquility.",
    image: "Candle-glassed-pearls.jpg",
    category: categories[0]._id,
    price: 28.99,
    quantity: 500,
  },
  {
    name: "Halem Candle",
    description:
      "Unveil the mysteries of enchanting scents with our Halem Candle. Inspired by the beauty of twilight, this handcrafted soy wax candle captures the essence of a serene evening with its blend of rich amber, warm vanilla, and subtle notes of spice. Encased in a sleek, minimalist container, the Halem Candle complements any decor while emanating a soothing glow. Ignite this candle to experience the magical allure of dusk in the comfort of your own space, creating an atmosphere that is as inviting as it is captivating.",
    image: "Candle-halem.png",
    category: categories[0]._id,
    price: 18.99,
    quantity: 500,
  },
];

const Category = () => {
  const { id } = useParams();

  const category = categories[0];

  return (
    <div>
      <div className="category-page-container">
        <img
          className="category-banner"
          src={`/images/${category.imageBanner}`}
        />
        <h1 className="category-page-heading">{category.name}</h1>
        <BrowseProductList products={products} />
      </div>
      <Cart />
    </div>
  );
};

export default Category;
