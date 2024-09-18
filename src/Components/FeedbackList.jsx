import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

function FeedbackList({ feedback }) {
    // If there is no feedback or the feedback array's lenght is zero, we return "No Feedback yet!"
    if (!feedback || feedback.length === 0) {
        return <p>No Feeback yet!</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((feedbackItem) => (
                <FeedbackItem key={feedbackItem.id} item={feedbackItem} />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
}

export default FeedbackList;
