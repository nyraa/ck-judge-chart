import "./DataList.css";
import Row from "../components/Row";

function DataList({arg_problems, arg_stats, arg_homeworkSets, arg_dataReady, arg_sortingFunc, arg_setInfoShowing})
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
            non_ac: arg_stats[problem.id].at(-1)[1] - arg_stats[problem.id].at(-1)[2],
            last_updated: new Date(arg_stats[problem.id].at(-1)[0]),
        };
    });
    row_data.sort(arg_sortingFunc);
    return (<div className="data-list-root">
        {row_data.map(data => <Row
            key={data.id}
            title={data.title}
            pId={data.id}
            submit={data.submit}
            ac={data.ac}
            ac_rate={data.ac_rate}
            non_ac={data.non_ac}
            last_updated={data.last_updated}
            setInfoShowing={arg_setInfoShowing}
        />)}
    </div>);
}

export default DataList;