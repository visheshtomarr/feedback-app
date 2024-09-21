import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

function FeedbackList({ feedback, handleDelete }) {
    // If there is no feedback or the feedback array's lenght is zero, we return "No Feedback yet!"
    if (!feedback || feedback.length === 0) {
        return <p>No Feeback yet!</p>;
    }

    // Feedback list with fade-in and fade-out animation.
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((feedbackItem) => (
                <motion.div
                    key={feedbackItem.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedbackItem 
                        key={feedbackItem.id} 
                        item={feedbackItem}
                        handleDelete={handleDelete}
                    />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

    // Feedback list without animation.
    // return (
    //     <div className="feedback-list">
    //         {feedback.map((feedbackItem) => (
    //             <FeedbackItem 
    //                 key={feedbackItem.id} 
    //                 item={feedbackItem}
    //                 handleDelete={handleDelete}
    //              />
    //         ))}
    //     </div>
    // )
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
