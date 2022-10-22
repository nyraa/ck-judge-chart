import './App.css';

import Navigator from "./containers/Navigator";

import DataList from "./containers/DataList";

import useJudgeData from './hooks/useJudgeData';

function App() {
    const { problems, homeworkSets, stats, ready: dataReady } = useJudgeData();
    return (
        <div className="App">
            <Navigator />
            <div className="title-bar">
                <div className="problem-name-title">Problems</div>
                <div className="submit-counts-title">Submit</div>
                <div className="ac-counts-title">AC</div>
                <div className="ac-rate-title">AC Rate</div>
                <div className="non-ac-counts-title">Non-AC</div>
                <div className="history-title">History</div>
            </div>
            <DataList arg_problems={problems} arg_homeworkSets={homeworkSets} arg_stats={stats} arg_dataReady={dataReady} />
        </div>
    );
}

export default App;
