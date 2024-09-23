import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
    // Declaring state and set-state methods.
    const [reviewText, setReviewText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState(10);
    const [validationMessage, setValidationMessage] = useState('');

    // Catch fields present inside the feedback object from FeedbackContext.
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    // Effect for clicking the edit button.
    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setReviewText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },
    // Whenever the state of any item in this array changes, the side of effect
    // of that change can be shown through useEffect(). 
    [feedbackEdit]);
    
    // Onchange function for handling change in review text.
    const handleReviewTextChange = ({ target: { value }}) => {
        if (value === '') {
            setBtnDisabled(true);
            setValidationMessage(null);
        }
        else if (value.trim().length < 10) {
            setValidationMessage("Review must be atleast 10 characters");
            setBtnDisabled(true);
        }
        else {
            setValidationMessage(null);
            setBtnDisabled(false);
        }
        setReviewText(value);
    }

    // OnSubmit function to create a new feedback when user submits the form.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (reviewText.trim().length > 10) {
            const newFeedback = {
                text: reviewText,
                rating,
            };

            // If the 'edit' field is true for any feedback item, we update
            // the feedback list, or else, we add a new feedback upon clicking
            // the 'Send' button.
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            // Reset to default state after feedback submission.
            setBtnDisabled(true);
            setRating(10);
            setReviewText('');
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How much would you rate our services?</h2>
                <RatingSelect select={setRating} selected={rating} />
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Write a review"
                        onChange={handleReviewTextChange}
                        value={reviewText}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>

                {validationMessage && <div className="message">{validationMessage}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;
