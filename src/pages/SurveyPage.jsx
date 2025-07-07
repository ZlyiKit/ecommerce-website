import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import "../styles/SurveyPage.css";

export default function SurveyPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }
    // You can send survey data to backend or API here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="survey-confirmation">
        <h2>Thank you for your feedback!</h2>
        <p>We appreciate you taking the time to help us improve.</p>
      </div>
    );
  }

  return (
    <>
      <ProgressBar currentStep={4} />
      <div className="survey-page">
        <h2>Customer Satisfaction Survey</h2>
        <form className="survey-form" onSubmit={handleSubmit}>
          <label>
  How would you rate your shopping experience?
  <div className="rating-wrapper">
    {[1, 2, 3, 4, 5].map((num, idx) => (
      <div className="rating-option" key={num}>
        <div
          className={`rating-number ${rating === num ? "selected" : ""}`}
          onClick={() => setRating(num)}
          role="radio"
          aria-checked={rating === num}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setRating(num);
          }}
        >
          {num}
        </div>
        <div className="rating-label">
          {["Very Poor", "Poor", "Average", "Good", "Excellent"][idx]}
        </div>
      </div>
    ))}
  </div>
</label>
          <label>
            Additional comments or suggestions:
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your thoughts here..."
              rows={5}
            />
          </label>

          <button type="submit">Submit Survey</button>
        </form>
      </div>
    </>
  );
}

