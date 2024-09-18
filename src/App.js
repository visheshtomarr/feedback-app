import { useState } from "react";
import Header from "./Components/Header.jsx";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData";

function App() {
    // Declaring 'App' level state and set-state method for FeedbackData.
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header text="Feedback UI" bgColor="hsl(238, 35%, 15%)" />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

export default App;