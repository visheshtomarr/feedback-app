import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import FeedbackStats from "./Components/FeedbackStats.jsx";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./Components/FeedbackForm.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import AboutIconLink from "./Components/AboutIconLink.jsx";
import { FeedbackProvider } from "./Context/FeedbackContext.js";


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
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route 
                            exact 
                            path="/"
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback}/>
                                    <FeedbackStats />
                                    <FeedbackList handleDelete={deleteFeedback} />
                                </>
                            }
                        />
                        <Route path="/about" element={ <AboutPage /> } />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;