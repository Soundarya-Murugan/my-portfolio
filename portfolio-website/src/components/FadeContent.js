import React, { useState, useEffect } from "react";
import "../assets/styles/FadeContent.css";

const FadeContent = ({ content }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 3000); // Toggle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fade-content ${visible ? "fade-in" : "fade-out"}`}>
      {content}
    </div>
  );
};

export default FadeContent;