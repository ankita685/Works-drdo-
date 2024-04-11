// import React, { useState } from "react";

// const FeedbackForm = ({ handleClose }) => {
//   const [feedback, setFeedback] = useState("");

//   const handleChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle submitting the feedback
//     console.log("Feedback submitted:", feedback);
//     // Close the feedback form after submitting
//     handleClose();
//   };

//   return (
//     <div className="feedback-form">
//       <h2>Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={feedback}
//           onChange={handleChange}
//           placeholder="Enter your feedback here..."
//           rows={4}
//           cols={50}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;


import React, { useState } from "react";

const FeedbackForm = ({ handleClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send feedback to backend
    console.log("Customer Name:", customerName);
    console.log("Feedback:", feedback);
    // Clear form fields
    setCustomerName("");
    setFeedback("");
    // Close the feedback form
    handleClose();
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit Feedback</button>
          <button type="button" onClick={handleClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;

