import { useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbzSeli7P5k2ABdRqIWuGtymTfRTsNOrLxNMJSmF2scLArPF_QG1iQpnRUicMdfZ1_r0"
});
const queryData = async (path, dataSetter, defaultValue) => {
    try {
        const {data} = await instance.get("/exec", {params: {path}});
        dataSetter(data);
    }
    catch(err) {
        console.error(err.message);
        dataSetter(defaultValue);
    }
};

export default function useJudgeData() {
    const [problems, setProblems] = useState({});
    const [homeworkSets, setHomeworkSets] = useState([]);
    const [stats, setStats] = useState({});
    useEffect(() => {
        queryData("get_problems", setProblems, {});
        queryData("get_homeworks", setHomeworkSets, []);
        queryData("get_log", setStats, {});

        const interval = setInterval(() => queryData("get_log", setStats, {}), 1000*30);
        return () => clearInterval(interval);
    }, []);
    return {problems, homeworkSets, stats};
};
