import "./DataList.css";

function DataList({arg_problems, arg_stats, arg_homeworkSets, arg_dataReady})
{
    return (<div className="data-list-root">
        {arg_dataReady
        && <>{arg_problems.map((problem) => (<div className="problem-row" key={problem.id}>
            <div className="problem-icon"></div>
            <div className="problem-name">{problem.title}</div>
            <div className="submit-counts">{arg_stats[problem.id].at(-1)[1]}</div>
            <div className="ac-counts">{arg_stats[problem.id].at(-1)[2]}</div>
            <div className="ac-rate">{(arg_stats[problem.id].at(-1)[2] * 100 / arg_stats[problem.id].at(-1)[1]).toFixed(2)}%</div>
            <div className="non-ac-counts">{arg_stats[problem.id].at(-1)[1] - arg_stats[problem.id].at(-1)[2]}</div>
            <canvas className="history-canvas" height="50px" width="200px"></canvas>
        </div>))}</>}
    </div>);
}

export default DataList;