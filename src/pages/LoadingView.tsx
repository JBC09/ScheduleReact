import React from "react";
import "../styles/LoadingView.css";

const LoadingView: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading...</p>
        </div>
    );
};

export default LoadingView;
