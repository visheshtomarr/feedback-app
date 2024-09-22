import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import FeedbackStats from "./Components/FeedbackStats.jsx";
import FeedbackList from "./Components/FeedbackList.jsx";
import FeedbackForm from "./Components/FeedbackForm.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import AboutIconLink from "./Components/AboutIconLink.jsx";
import { FeedbackProvider } from "./Context/FeedbackContext.js";


function App() {
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
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
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