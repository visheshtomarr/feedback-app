import { useState } from "react";
import Header from "./Components/Header.jsx";
import FeedbackStats from "./Components/FeedbackStats.jsx";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./Components/FeedbackForm.jsx";
import { v4 as uuidv4 } from 'uuid';

function App() {
    // Declaring 'App' level state and set-state method for FeedbackData.
    const [feedback, setFeedback] = useState(FeedbackData);

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
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App;