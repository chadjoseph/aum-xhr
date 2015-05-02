export default function (options) {
  var xhr = new window.XMLHttpRequest();

  xhr.open(options.method, options.url, true, options.user, options.password);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    switch (xhr.status) {
      case 200:
      case 201:
      case 202:
      case 203:
      case 204:
      case 205:
      case 206:
      {
        options.onload(xhr.responseText);
        break;
      }

      default:
      {
        options.onerror(xhr.responseText);
        break;
      }
    }
  };

  if (options.data) {
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  }

  xhr.setRequestHeader('Accept', 'application/json, text/*');

  xhr.send(options.data);
}

