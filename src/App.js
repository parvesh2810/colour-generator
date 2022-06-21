import React, { useEffect, useState, useRef } from "react";
import SingleColour from "./single-colour";

function App() {
  const color = useRef("#f15025");
  const [lists, setLists] = useState([]);

  const hexTorgba = (currentColor) => {
    if (currentColor.match("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$") === null) {
      alert("please Enter a Valid Hex Code");
      color.current.value = "";
    } else {
      currentColor = currentColor.replace("#", "");
      if (currentColor.length === 3) currentColor = currentColor + currentColor;
      let aRgbHex = currentColor.match(/.{1,2}/g);
      let aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16),
      ];
      const colorArray = [];
      for (let step = 0; step <= 20; step++) {
        colorArray.push({
          rgb: aRgb,
          alpha: (step * 5) / 100,
        });
      }
      setLists(colorArray);
    }
  };

  useEffect(() => {
    hexTorgba("#f15025");
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let currentColor = color.current.value;
    hexTorgba(currentColor);
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleClick}>
          <input type="text" ref={color} placeholder="#f15025" />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
        <h4>click on the tile/color to copy to clipboad</h4>
      </section>
      <section className="colors">
        {lists.map((list, index) => {
          return <SingleColour key={index} {...list} />;
        })}
      </section>
    </>
  );
}

export default App;
