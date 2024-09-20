import { useState } from "react";
import Header from "./Components/Header.jsx";
import FeedbackStats from "./Components/FeedbackStats.jsx";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./Components/FeedbackForm.jsx";

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

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App;