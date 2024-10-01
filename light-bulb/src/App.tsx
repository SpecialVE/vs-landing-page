/**
 * Task, When I click on the button it should make the page bright(use a white bg) and text should say darken
 * Clicking on darken too should do the opposite, black bg, and text should change
 *
 * Don't forget to update text colors as you cycle between light and dark bg
 **/

import { useState } from "react";
import './styles.css';

export const App: React.FC = () => {
  const [isBright, setIsBright] = useState<boolean>(false);

  // Properly toggling the state
  const toggleBrightness = () => {
    setIsBright((prev) => !prev);
  };

  return (
    <div
      className={`h-screen flex items-center justify-center transition-all duration-300 ${
        isBright ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <button
        type="button"
        onClick={toggleBrightness}
        className="px-4 py-2 border rounded focus:outline-none focus:ring"
      >
        {isBright ? 'Darken' : 'Brighten'}
      </button>
    </div>
  );
};

export default App;