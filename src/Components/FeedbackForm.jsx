import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";

function FeedbackForm({ handleAdd }) {
    // Declaring state and set-state methods.
    const [reviewText, setReviewText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState(10);
    const [validationMessage, setValidationMessage] = useState('');

    // Onchange function for handling change in review text.
    const handleReviewTextChange = (e) => {
        if (reviewText === '') {
            setBtnDisabled(true);
            setValidationMessage(null);
        }
        else if (reviewText !== '' && reviewText.trim().length < 9) {
            setValidationMessage("Review must be atleast 10 characters");
            setBtnDisabled(true);
        }
        else {
            setBtnDisabled(false);
            setValidationMessage(null);
        }
        setReviewText(e.target.value);
    }

    // OnSubmit function to create a new feedback when user submits the form.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (reviewText.trim().length > 10) {
            const newFeedback = {
                text: reviewText,
                rating,
            };
            handleAdd(newFeedback);
            setReviewText('');
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How much would you rate our services?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Write a review"
                        onChange={handleReviewTextChange}
                        value={reviewText}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {validationMessage && <div className="message">{validationMessage}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;
