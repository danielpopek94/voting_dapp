import Header from "./components/Header.tsx";
import CandidatesList from "./components/CandidatesList.tsx";
import ScoresTable from "./components/ScoresTable.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <CandidatesList />
      <ScoresTable />
    </div>
  );
}

export default App;
