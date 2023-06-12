import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import dayjs from "dayjs";
import MyTextField from "./MyTextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Trips from "../Components/Trips";

const Travel = () => {
  const navigate = useNavigate();
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const [radioValue, setradioValue] = useState(null);
  const [detailValue, setdetailValue] = useState(null);
  const [dateValue, setdateValue] = useState(null);

  const countries = [
    { label: "Delhi" },
    { label: "Mumbai" },
    { label: "Patna" },
    { label: "Kolkata" },
    { label: "Sheikhpura" },
    { label: "Goa" },
    { label: "Cheenai" },
  ];
  const countries2 = [
    { label: "Delhi" },
    { label: "Mumbai" },
    { label: "Patna" },
    { label: "Kolkata" },
    { label: "Sheikhpura" },
    { label: "Goa" },
    { label: "Cheenai" },
  ];

  const divStyle = {
    width: "100%",
    height: "520px",
    overflow: "hidden",
    marginTop: "15px",
  };

  const div2Style = {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    marginLeft: "5px",
    marginRight: "15px",
  };

  const imageStyle = {
    height: "100%",
    width: "99%",
    marginLeft: "5px",
  };

  const overlayStyle = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "4px",
    textAlign: "center",
    width: "80%",
    height: "120px",
  };

  const handleSearch = () => {
    console.log("From:", fromValue);
    console.log("To:", toValue);
    console.log("radio:", radioValue);
    console.log("date:", dateValue);
   
    
    navigate("/trips", {
      state: {
        fromValue: fromValue,
        toValue: toValue,
        radioValue: radioValue,
        detail: detailValue,
        date: dateValue,
      },
    });
  };


  return (
    <>
      <Navbar />
      <div style={divStyle}>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/268/205/96/nature-water-turquoise-sky-wallpaper-preview.jpg"
          style={imageStyle}
        />
        <div style={overlayStyle}>
          <FormControl style={{ marginRight: "900px" }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event, value) => setradioValue(value)}
            >
              <FormControlLabel
                value="oneway"
                control={<Radio />}
                label="One Way"
              />
              <FormControlLabel
                value="roundtrip"
                control={<Radio />}
                label="Round Trip"
              />
            </RadioGroup>
          </FormControl>

          <Autocomplete
            id="country-select-demo"
            sx={{ width: 200 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange={(event, value) => setFromValue(value)}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 200, marginLeft: 27, marginTop: -7 }}
            options={countries2}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange={(event, value) => setToValue(value)}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              sx={{ marginTop: "-62px" }}
              components={["DateRangePicker"]}
            >
              <DateRangePicker
                className="date-range-picker"
                localeText={{ start: "Depart On", end: "Return On" }}
                sx={{ width: 300, marginLeft: 55 }}
                // onChange={(newValue) => setdateValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider> */}
          <MyTextField sx={{ marginTop: -20 }}  />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{ marginLeft: 145, marginTop: -14 }}
          >
            Search
          </Button>
        </div>
      </div>
      <div style={div2Style}>
        <img
          src="https://jhs.jugaadhai.in/images/c25e7fa0-f0c1-411f-bd36-b9a57afbf1daflipkart-flight-50.png"
          style={{ width: "100%", height: "100%", marginRight: "15px" }}
        />
      </div>
      <div style={div2Style}>
        <img
          src="https://jhs.jugaadhai.in/images/c25e7fa0-f0c1-411f-bd36-b9a57afbf1daflipkart-flight-50.png"
          style={{ width: "100%", height: "100%", marginRight: "15px" }}
        />
      </div>
      <div style={div2Style}>
        <img
          src="https://jhs.jugaadhai.in/images/c25e7fa0-f0c1-411f-bd36-b9a57afbf1daflipkart-flight-50.png"
          style={{ width: "100%", height: "100%", marginRight: "15px" }}
        />
      </div>
    </>
  );
};

export default Travel;
