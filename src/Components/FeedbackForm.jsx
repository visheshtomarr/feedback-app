import Card from "./shared/Card";
import { useState } from "react";

function FeedbackForm() {
    // Declaring Review text state and set-state methods.
    const [reviewText, setReviewText] = useState('');

    // Onchange function for handling change in review text.
    const handleReviewTextChange = (e) => {
        setReviewText(e.target.value);
    }

    return (
        <Card>
            <form>
                <h2>How much would you rate our services?</h2>
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Write a review"
                        onChange={handleReviewTextChange}
                        value={reviewText}
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm;
