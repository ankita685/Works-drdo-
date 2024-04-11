

import React, { useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
const Form = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState({

    Name: "",
    Email: "",
    Number: "",
    Address: "",
    details: "",
    category: "", // Single category instead of an array
  });
  const [submissionError, setSubmissionError] = useState(false);

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };
  const getdata = async (e) => {
    e.preventDefault();
    if (!user.Name || !user.Number || !user.Address || !user.details || !user.category) {
      setSubmissionError(true);
      
      return;
    }
    

    setSubmissionError(false);
    const { Name, Email, Number, Address, details, category } = user;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Number,
        Address,
        details,
        category, // Include the selected category in the request
      }),
    };

    const res = await fetch(
      "https://vite-project-4dcf8-default-rtdb.firebaseio.com/UserData.json",
      options
    );


    if (res.ok) {
      alert("Successfully sent");
    } else {
      alert("Error Occurred");
    }
  };
  

  return (
    <div className="form1">
      <h2>
        {t("Register New Building Repair Complaints")}</h2>
      <div className="container1">
        <form method="POST">
     
        {t("Select Language")}:
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            {/* Add more language options as needed */}
          </select>
          <input
            type="text"
            name="Name"
            placeholder={t("Building Number(Zone)")}
            value={user.Name}
            autoComplete="off"
            required
            onChange={data}
          />
        
          <input
            type="text"
            name="Number"
            placeholder="000 000 0000"
            value={user.Number}
            autoComplete="off"
            required
            onChange={data}
          />
          <input
            type="text"
            name="Address"
            placeholder={t("Location")}
            value={user.Address}
            autoComplete="off"
            required
            onChange={data}
          />
          <textarea
            name="details"
            placeholder={t("Detail of Complaints")}
            value={user.details}
            autoComplete="off"
            required
            onChange={data}
          />
          {/* Dropdown select for category */}
          <label>
            {t("Select Category")}:
            <select
              name="category"
              value={user.category}
              onChange={data}
              required
            >
              <option value="">--{t("Select")}--</option>
              <option value="E/M(Electrical Complaint)">{t("E/M(Electrical Complaint)")}</option>
              <option value="B/R(Civil Complaint">{t("B/R(Civil Complaint)")}</option>
              <option value="AC Complaints">{t("AC Complaints")}</option>
              <option value="Other">{t("Others")}</option> 
            </select>
          </label>

          <button onClick={getdata} className="btn">
            {t("Submit")}
          </button>
          {submissionError && (
            <p style={{ color: "red" }}>{t("Please fill in all details.")}</p>
          )}
            
        </form>
      </div>
    </div>
  );
};
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
       // hi.json



      },
    },
    hi: {
      translation: {
        "Register New Building Repair Complaints": "नई बिल्डिंग मरम्मत शिकायतें दर्ज करें",
        "Select Language": "भाषा चुनें",
        "Building Number": "बिल्डिंग नंबर",
        "Location": "स्थान",
        "Detail of Complaints": "शिकायत का विवरण",
        "E/M(Electrical Complaint)": "ई/एम (इलेक्ट्रिकल शिकायत)",
        "B/R(Civil Complaint)": "बी/आर (सिविल शिकायत)",
        "AC Complaints": "एसी शिकायतें",
        "Others": "अन्य",
        "Submit": "प्रस्तुत करें",
        "Select": "चयन करें",
        "Select Category": "श्रेणी चुनें"
      
      },
    },
    // Add more languages as needed
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default Form;
