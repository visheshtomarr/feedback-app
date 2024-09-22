import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackStats() {
    // Create feedback object from FeedbackContext instead of prop.
    const {feedback} = useContext(FeedbackContext);

    // Calculte the average rating using reduce() method.
    //
    // 'acc' is being used to accumulate the whole feedback array and 
    // 'curr' is being used as the item inside feedback array.
    let average = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0) / feedback.length;
    // console.log(average);

    // Storing average to one decimal value and excluding if it only has zero.
    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;
