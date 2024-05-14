import "./App.scss";
import Header from "./components/Header.tsx";
import CandidatesList from "./components/CandidatesList.tsx";
function App() {
  return (
    <div className="App">
      <Header />
      <CandidatesList />
    </div>
  );
}

export default App;
