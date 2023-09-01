import React from "react";
import PRODUCTS from "../data/PRODUCTS";
import "../styles/Products.css";

const Products = () => {
  return (
    <div className="products mb-5">
      <h3 className="heading text-danger mb-4">Popular Products</h3>

      <div className="row">
        {PRODUCTS.map((product) => (
          <div className="col-12 col-md-4 mb-5">
            <div className="card shadow-sm p-3" key={product.id}>
              <img
                src={product.Image}
                alt="product"
                className="card-image"
                width={100}
              />
              <div className="card-body text-center bg-light rounded">
                <p className="card-text">{product.name}</p>
                <p className="cart-text">₹{product.price}</p>
                <div className="card-btn text-center">
                  <a href="/" className="btn btn-danger">
                    Add To Cart
                  </a>
                  <a href="/" className="btn btn-danger mx-2">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
