import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';


function MyTextField() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [numAdults, setNumAdults] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleIncrement = (type) => {
    if (type === "adults") {
      setNumAdults(numAdults + 1);
    } else if (type === "infants") {
      setNumInfants(numInfants + 1);
    } else if (type === "children") {
      setNumChildren(numChildren + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adults" && numAdults > 0) {
      setNumAdults(numAdults - 1);
    } else if (type === "infants" && numInfants > 0) {
      setNumInfants(numInfants - 1);
    } else if (type === "children" && numChildren > 0) {
      setNumChildren(numChildren - 1);
    }
  };

  const getSelectedOptionText = () => {
    if (!selectedOption) {
      return "No option selected";
    }
    return selectedOption;
  };

  return (
    <div style={{marginTop:'-5px',marginLeft:'750px',width:'300px'}}>
      <TextField 
        label="Enter your text"
        variant="outlined"
        onClick={handleOpen}
       sx={{minWidth:400,marginTop:-6,marginRight:6}}
        value={getSelectedOptionText() + " - Adults: " + numAdults + ", Infants: " + numInfants + ", Children: " + numChildren }
        InputProps={{
          readOnly: true,
        }}
      />
      <Modal open={isOpen} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '2rem' ,display:'fit'}}>
          <h2>Modal Content</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <label>Adults:</label>
              <button onClick={() => handleDecrement('adults')}>-</button>
              <span>{numAdults}</span>
              <button onClick={() => handleIncrement('adults')}>+</button>
            </div>
            <div>
              <label>Infants:</label>
              <button onClick={() => handleDecrement('infants')}>-</button>
              <span>{numInfants}</span>
              <button onClick={() => handleIncrement('infants')}>+</button>
            </div>
            <div>
              <label>Children:</label>
              <button onClick={() => handleDecrement('children')}>-</button>
              <span>{numChildren}</span>
              <button onClick={() => handleIncrement('children')}>+</button>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Business"
                    checked={selectedOption === "Business"}
                    onChange={handleRadioChange}
                  />
                  Business
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Economy"
                    checked={selectedOption === "Economy"}
                    onChange={handleRadioChange}
                  />
                  Economy
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Premium"
                    checked={selectedOption === "Premium"}
                    onChange={handleRadioChange}
                  />
                  Premium
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MyTextField;
