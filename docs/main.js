const {
    Signal,
    ShowIf,
    QueryRouter,
    div,
    nav,
    ul,
    li,
    input,
    button,
    table,
    thead,
    tbody,
    tr,
    th,
    td,
    iframe,
    p,
    span,
    h1,
    a,
    br,
    text,
    img,
    svg,
    label,
    TextState,
    State,
    ClassList,
    any
} = require('./NCKUpp/res/domHelper');
const apiBase = "https://script.google.com/macros/s/AKfycbzSeli7P5k2ABdRqIWuGtymTfRTsNOrLxNMJSmF2scLArPF_QG1iQpnRUicMdfZ1_r0/exec";
function callAPI(path)
{
    let params = new URLSearchParams();
    params.append("path", path);
    return fetch(`${apiBase}?${params.toString()}`);
}
(async function main()
{
    // TODO create UI
    document.body.appendChild(
        div(null, {id: "title_label"},
            div(null, {id: "title"},
                a("problem title")),
            div(null, {id: "submit"},
                a("submit")),
            div(null, {id: "ac"},
                a("ac")),
            div(null, {id: "ac_rate"},
                a("ac rate")),
            div(null, {id: "non_ac"},
                a("!ac")),
            div(null, {id: "chart_label"},
                a("chart"))
    ));
    // TODO get problems
    const problems = await (await callAPI("get_problems")).json();
    const logs = await (await callAPI("get_log")).json();
    for(let problem of problems)
    {
        problem.signal = new Signal(logs[problem.id]);
        document.body.appendChild(
            div("problem-root",
                new State(problem.signal, (state) =>
                {
                    return div("problem",
                        div("status-icon"),
                        div("title",
                            a(problem.title)),
                        div("submit",
                            a(state.at(-1)[1])),
                        div("ac",
                            a(state.at(-1)[2])),
                        div("ac-rate",
                            a((state.at(-1)[2] * 100 / state.at(-1)[1]).toFixed(2) + "%")),
                        div("non-ac",
                            a((state.at(-1)[1] - state.at(-1)[2]).toString())),
                        any("canvas", "chart", {height: "50px", width: "200px"})
                    )
                })
            )
        );
    }
    // TODO get homeworks
    // TODO set interval to get log
        // TODO update or append item for DOM
})();