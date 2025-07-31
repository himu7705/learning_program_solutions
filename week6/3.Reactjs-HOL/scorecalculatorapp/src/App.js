import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './components/CalculateScore'; //type: ignore

function App() {
  return (
    <div>
      <CalculateScore
      Name={"Hima Varshit"}
      School={"The Future Kid's School"}
      total={300}
      goal={4}
      />
    </div>
  );
}

export default App;
