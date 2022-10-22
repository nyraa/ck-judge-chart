import "./DataList.css";

function DataList(params)
{
    return (<div className="data-list-root">
        {params.arg_problems.map((problem) => (<div className="problem-row" key={problem.id}>
            <div className="problem-icon"></div>
            <div className="problem-name">{problem.title}</div>
            <div className="submit-counts">{params.arg_stats[problem.id].at(-1)[1]}</div>
            <div className="ac-counts">{params.arg_stats[problem.id].at(-1)[2]}</div>
            <div className="ac-rate">{(params.arg_stats[problem.id].at(-1)[2] * 100 / params.arg_stats[problem.id].at(-1)[1]).toFixed(2)}%</div>
            <div className="non-ac-counts">{params.arg_stats[problem.id].at(-1)[1] - params.arg_stats[problem.id].at(-1)[2]}</div>
            <canvas className="history-canvas" height="50px" width="200px"></canvas>
        </div>))}
    </div>);
}

export default DataList;