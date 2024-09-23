import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackStats() {
    // Create feedback object from FeedbackContext instead of prop.
    const {feedback} = useContext(FeedbackContext);

    // Calculte the average rating using reduce() method.
    //
    // 'acc' is being used to accumulate the whole feedback array and 
    // 'curr' is being used as the item inside feedback array.
    const average = 
        feedback.length === 0 
        ? 0
        : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
        </div>
    )
}

export default FeedbackStats;
