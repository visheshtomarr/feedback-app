import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'This is first feedback.',
        },
        {
            id: 2,
            rating: 8,
            text: 'This is second feedback.',
        },
        {
            id: 3,
            rating: 9,
            text: 'This is third feedback.',
        }
    ])

    // Function to delete feedback.
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            // Filters the 'Feedback' array and removes the item that has 'id'.
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    // Function to add a new feedback.
    const addFeedback = (newFeedback) => {
        // This will generate a random id for every new feedback we create.
        newFeedback.id = uuidv4();
        // We will use whatever feedbacks were already present in the state and add our new feedback.
        setFeedback([newFeedback, ...feedback]);
    }

    return (
        <FeedbackContext.Provider 
            value={{ 
                feedback,
                deleteFeedback,
                addFeedback,
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;