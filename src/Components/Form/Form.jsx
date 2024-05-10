




import React, { useState, useEffect } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import { openDB } from "idb";

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

  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  useEffect(() => {
    const createIndexedDB = async () => {
      try {
        const db = await openDB("form-db", 1, {
          upgrade(db) {
            // Create the formData object store during the upgrade process
            if (!db.objectStoreNames.contains("formData")) {
              db.createObjectStore("formData", { keyPath: "id", autoIncrement: true });
            }
          },
        });

        if (db) {
          console.log("IndexedDB form-db created successfully.");
        }
      } catch (error) {
        console.error("Error creating IndexedDB:", error);
      }
    };

    createIndexedDB();
  }, []);

  const getdata = async (e) => {
    e.preventDefault();
  
    if (!user.Name || !user.Number || !user.Address || !user.details || !user.category) {
      setSubmissionError(true);
      return;
    }
  
    setSubmissionError(false);
    const { Name, Email, Number, Address, details, category } = user;
  
    try {
      // Open the IndexedDB database
      const db = await openDB("form-db", 1);
  
      // Check if the formData object store exists
      if (!db.objectStoreNames.contains("formData")) {
        console.error("formData object store not found.");
        return;
      }
  
      // Store form data in IndexedDB
      const tx = db.transaction("formData", "readwrite");
      const formDataStore = tx.objectStore("formData");
  
      const formData = {
        Name,
        Email,
        Number,
        Address,
        details,
        category,
      };
  
      // Add the new form data to the existing data in the object store
      formDataStore.add(formData);
  
      console.log("Form data stored successfully in IndexedDB");
  
      tx.done.then(() => {
        db.close();
      });
  
      // Send form data to Firebase
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
          category,
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
    } catch (error) {
      console.error("Error storing form data:", error);
      alert("Error storing form data. Please try again.");
    }
  };
  

  return (
    <div className="form1">
      <h2>{t("Register New Building Repair Complaints")}</h2>
      <div className="container1">
        <form method="POST">
          {t("Select Language")}:{" "}
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
            {t("Select Category")}:{" "}
            <select name="category" value={user.category} onChange={data} required>
              <option value="">--{t("Select")}--</option>
              <option value="E/M(Electrical Complaint)">{t("E/M(Electrical Complaint)")}</option>
              <option value="B/R(Civil Complaint)">{t("B/R(Civil Complaint)")}</option>
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
        "Select Category": "श्रेणी चुनें",
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