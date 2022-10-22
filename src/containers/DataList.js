import "./DataList.css";

function DataList({arg_problems, arg_stats, arg_homeworkSets, arg_dataReady, arg_sortingFunc})
{
    if(!arg_dataReady)
    {
        return (<div className="loading-message">
            Loading...
        </div>);
    }
    let row_data = arg_problems.map((problem) => {
        return {
            title: problem.title,
            id: problem.id,
            submit: arg_stats[problem.id].at(-1)[1],
            ac: arg_stats[problem.id].at(-1)[2],
            ac_rate: (arg_stats[problem.id].at(-1)[2] * 100 / arg_stats[problem.id].at(-1)[1]).toFixed(2),
            non_ac: arg_stats[problem.id].at(-1)[1] - arg_stats[problem.id].at(-1)[2]
        };
    });
    row_data.sort(arg_sortingFunc);
    return (<div className="data-list-root">
        {row_data.map((data) => (<div className="problem-row" key={data.id}>
            <div className="problem-icon"></div>
            <div className="problem-name">
                {data.title}
                <a href={`https://ckj.imslab.org/#/problems/${data.id}`} target="_blank">[*]</a>
            </div>
            <div className="submit-counts">{data.submit}</div>
            <div className="ac-counts">{data.ac}</div>
            <div className="ac-rate">{data.ac_rate}%</div>
            <div className="non-ac-counts">{data.non_ac}</div>
            <canvas className="history-canvas" height="50px" width="200px"></canvas>
        </div>))}
    </div>);
}

export default DataList;