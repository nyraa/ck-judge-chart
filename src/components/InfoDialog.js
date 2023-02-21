import "./InfoDialog.css"

function InfoDialog({arg_infoShowing, arg_setInfoShowing, arg_problems, arg_homeworkSets, arg_stats, arg_dataReady})
{
    // const 
    return arg_infoShowing && arg_dataReady && <>
        <div className="info-dialog-overlay" onClick={() => arg_setInfoShowing(null)}></div>
        <div className="info-dialog">
            <div className="dialog-title">
                <span>{}</span>
            </div>
        </div>
    </>;
}
export default InfoDialog;