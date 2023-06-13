// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Modal from '@mui/material/Modal';

// function MyTextField({ onResponse }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [numAdults, setNumAdults] = useState(0);
//   const [numInfants, setNumInfants] = useState(0);
//   const [numChildren, setNumChildren] = useState(0);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleRadioChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleIncrement = (type) => {
//     if (type === "adults") {
//       setNumAdults(numAdults + 1);
//     } else if (type === "infants") {
//       setNumInfants(numInfants + 1);
//     } else if (type === "children") {
//       setNumChildren(numChildren + 1);
//     }
//   };

//   const handleDecrement = (type) => {
//     if (type === "adults" && numAdults > 0) {
//       setNumAdults(numAdults - 1);
//     } else if (type === "infants" && numInfants > 0) {
//       setNumInfants(numInfants - 1);
//     } else if (type === "children" && numChildren > 0) {
//       setNumChildren(numChildren - 1);
//     }
//   };

//   const getSelectedOptionText = () => {
//     if (!selectedOption) {
//       return "No option selected";
//     }
//     return selectedOption;
//   };

//   const handleSearch = () => {
//     onResponse(selectedOption, numAdults, numInfants, numChildren);
//   };

//   return (
   
//   );
// }

// export default MyTextField;
