import React, { useState, useEffect } from "react";

const SingleColour = ({ rgb, alpha }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className="color"
      style={{
        background: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(
          `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`
        );
      }}
    >
      <p className="percent-value">
        rgba({rgb[0]}, {rgb[1]}, {rgb[2]},{alpha})
      </p>
      {alert && <p className="alert"> copied to clipboard </p>}
    </article>
  );
};

export default SingleColour;
