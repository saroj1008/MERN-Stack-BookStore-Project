import React, { useEffect, useState } from "react";
import apiServices from "../../../services/apiService";
import ProductSingleItem from "./ProductSingleItem";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import { useOutletContext } from "react-router-dom";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);
  // const { cartLength, setCartLength } = useOutletContext();

  useEffect(() => {
    fetchProductData();
  }, []);

  async function fetchProductData() {
    const response = await apiServices.fetchProducts();
    setProductData(response);
    setFilteredProductData(response); // Set both productData and filteredProductData initially
  }

  // handle search bar
  function handleSearchBar(text) {
    const filteredData = productData.filter((data) =>
      data.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProductData(filteredData);
  }

  return (
    <>
      <SearchBar data={{ handleSearchBar }} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "10px",
          mt: 2,
          ml: 2,
          mr: 2,
        }}
      >
        {filteredProductData.map((item) => (
          <ProductSingleItem key={item._id} data={item} />
        ))}
      </Box>
    </>
  );
};

export default ProductList;
