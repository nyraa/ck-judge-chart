import History from "./History";

export default function Row({title, pId, submit, ac, ac_rate, non_ac}) {
    return <div className="problem-row">
        <div className="problem-icon"></div>
        <div className="problem-name">
            {title}
            <a href={`https://ckj.imslab.org/#/problems/${pId}`} target="_blank" rel="noreferrer">[*]</a>
        </div>
        <div className="submit-counte">{submit}</div>
        <div className="ac-counts">{ac}</div>
        <div className="ac-rate">{ac_rate}%</div>
        <div className="non-ac-counts">{non_ac}</div>
        <History />
    </div>
};