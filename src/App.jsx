import "./App.css";
import Navigation from "./components/Navigation";
import Herosection from "./components/Hero";
const App = () => {
  return (
    <div>
      <Navigation />
      <Herosection/>
    </div>
  );
};

export default App; // Export the component for use in other parts of your application
