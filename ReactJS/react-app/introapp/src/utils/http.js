const getRequest = function(url, onload) 
{
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onload = () => onload(request.response);
    request.send();
};

export default getRequest;