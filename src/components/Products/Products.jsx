import formatCurrency from "../../utils";
import "../Products/Products.css";
const Products = () => {
  const products = [
    {
      _id: "dress1",
      image: "/images/dress1.jpg",
      title: "Midi sundress with shirring detail",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["X", "L", "XL", "XXL"],
      price: 29.5,
    },
    {
      _id: "dress2",
      image: "/images/dress2.jpg",
      title: "Midi sundress with ruched front",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["X", "M", "L"],
      price: 18.9,
    },
    {
      _id: "dress3",
      image: "/images/dress3.jpg",
      title: "Midi dress in pink ditsy floral",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["X", "M", "L"],
      price: 14.9,
    },
    {
      _id: "dress4",
      image: "/images/dress4.jpg",
      title: "cami maxi dress in polka dot",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["XL"],
      price: 25.9,
    },
    {
      _id: "dress5",
      image: "/images/dress5.jpg",
      title: "Frill mini dress in yellow polka dot",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["X", "L", "XL"],
      price: 10.9,
    },
    {
      _id: "dress6",
      image: "/images/dress6.jpg",
      title: "Midi tea dress in blue and red spot",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["XL", "XXL"],
      price: 49.9,
    },
    {
      _id: "dress7",
      image: "/images/dress2.jpg",
      title: "Midi sundress with ruched front",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["X", "M", "L"],
      price: 19.9,
    },
    {
      _id: "dress8",
      image: "/images/dress3.jpg",
      title: "Midi dress in pink ditsy floral",
      description:
        "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      availableSizes: ["X", "M", "L"],
      price: 20.9,
    }
  ];
 
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={"#" + product._id}>
                <img src={product.image} alt={product.title}></img>
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div>{formatCurrency( product.price)}</div>
                <button className="button primary">Add To Card</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
