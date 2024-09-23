import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
    // Create feedback object from FeedbackContext instead of prop.
    const {feedback, isLoading} = useContext(FeedbackContext);

    // If there is no feedback or the feedback array's lenght is zero, we return "No Feedback yet!"
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feeback yet!</p>;
    }

    // Feedback list with fade-in and fade-out animation.
    return isLoading ? (
        <Spinner />
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((feedbackItem) => (
                <motion.div
                    key={feedbackItem.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                >
                    <FeedbackItem key={feedbackItem.id} item={feedbackItem} />
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

export default FeedbackList;
