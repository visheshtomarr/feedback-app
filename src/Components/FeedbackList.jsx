import FeedbackItem from "./FeedbackItem";

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

export default FeedbackList;
