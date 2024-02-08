// import React, { useEffect, useState } from "react";
// import { Container, InputAdornment, TextField } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// const SearchBar = ({ data }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const { filteredProductData, setFilteredProductData, handleSearchBar } = data;
//   console.log("filtereddata", filteredProductData);

//   useEffect(() => {
// handleChange();
//   }, [searchTerm]);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     handleSearchBar(searchTerm);
//   };


//   return (
//     <Container maxWidth="md" sx={{ mt: 10, mb: 8 }}>
//       <TextField
//         id="search"
//         type="search"
//         label="Search"
//         value={searchTerm}
//         onChange={handleChange}
//         sx={{ width: 600 }}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//         }}
//       />
//     </Container>
//   );
// };

// export default SearchBar;

import React, { useEffect, useState } from "react";
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearchBar } = data;

  useEffect(() => {
    handleSearchBar(searchTerm);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 8 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 600 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default SearchBar;
