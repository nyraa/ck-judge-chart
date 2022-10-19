function request(method, url, data=null)
{
    return new Promise((resolve, reject) =>
    {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, async=false);
        xhr.send(data);
        resolve(xhr.response);
    });
}