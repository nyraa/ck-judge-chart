import logo from './logo.svg';
import './App.css';

import useJudgeData from './hooks/useJudgeData';

function App() {
  const {problems, homeworkSets, stats} = useJudgeData();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
