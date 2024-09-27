/**
 * Task, When I click on the button it should make the page bright(use a white bg) and text should say darken
 * Clicking on darken too should do the opposite, black bg, and text should change
 *
 * Don't forget to update text colors as you cycle between light and dark bg
 */
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";


export const App = () => {
  return (
    <div className="bg-black h-screen grid place-items-center text-white">
      <button type="button">Brighten</button>
      <HomePage />
      <MenuPage />
    </div>
  );
};
