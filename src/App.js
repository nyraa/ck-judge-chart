import './App.css';
import React, {useState} from "react";

import Navigator from "./containers/Navigator";

import DataList from "./containers/DataList";

import useJudgeData from './hooks/useJudgeData';

import InfoDailog from "./components/InfoDialog.js";

function App() {
    const {problems, homeworkSets, stats, ready: dataReady, lastUpdate} = useJudgeData();
    const [sortingMode, setSortingMode] = useState(0);
    const [infoShowing, setInfoShowing] = useState(null);
    const sortingTypeEvent = baseId => {
        return () => {
            if(sortingMode === baseId) setSortingMode(baseId + 1);
            else setSortingMode(baseId);
        };
    };
    const sortingTypeIndicator = baseId => {
        if(sortingMode === baseId) return "sorting-mode sorting-mode--0";
        else if(sortingMode === baseId + 1) return "sorting-mode sorting-mode--1";
        else return "sorting-mode";
    }
    const sortingTypes = [
        () => 0,
        () => -1,
        (a, b) => b.submit - a.submit,
        (a, b) => a.submit - b.submit,
        (a, b) => b.ac - a.ac,
        (a, b) => a.ac - b.ac,
        (a, b) => b.ac_rate - a.ac_rate,
        (a, b) => a.ac_rate - b.ac_rate,
        (a, b) => b.non_ac - a.non_ac,
        (a, b) => a.non_ac - b.non_ac
    ];
    return (
        <div className="App">
            <InfoDailog arg_infoShowing={infoShowing} arg_setInfoShowing={setInfoShowing} arg_problems={problems} arg_homeworkSets={homeworkSets} arg_stats={stats} arg_dataReady={dataReady} />
            <Navigator arg_lastUpdate={lastUpdate} />
            <div className="title-bar">
                <div className={`problem-name-title ${sortingTypeIndicator(0)}`} onClick={sortingTypeEvent(0)}>Problems</div>
                <div className={`submit-counts-title ${sortingTypeIndicator(2)}`} onClick={sortingTypeEvent(2)}>Submit</div>
                <div className={`ac-counts-title ${sortingTypeIndicator(4)}`} onClick={sortingTypeEvent(4)}>AC</div>
                <div className={`ac-rate-title ${sortingTypeIndicator(6)}`} onClick={sortingTypeEvent(6)}>AC Rate</div>
                <div className={`non-ac-counts-title ${sortingTypeIndicator(8)}`} onClick={sortingTypeEvent(8)}>Non-AC</div>
                <div className="history-title">History</div>
            </div>
            <DataList arg_problems={problems} arg_homeworkSets={homeworkSets} arg_stats={stats} arg_dataReady={dataReady} arg_sortingFunc={sortingTypes[sortingMode]} arg_setInfoShowing={setInfoShowing} />
        </div>
    );
}

export default App;
