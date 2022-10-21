function PopupWindow(show_signal)
{
    const body = div();
    const popupWindow = div("popup-window-overlay",
        div('popup-window',
            button("close-button", "close", () =>
            {
                show_signal.set(false);
            }),
            body
        )
    );
    popupWindow.clear = () =>
    {
        body.innerHTML = "";
    };
    popupWindow.append = (element) =>
    {
        body.appendChild(element);
    };
    return popupWindow;
}

module.exports =
{
    PopupWindow
}