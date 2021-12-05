const SERVER_IP = '192.168.1.2:5000'

export const REQUEST = {
  EVENT: 0,
  USER: 1,
}

export function requestData(requestType, setter, id) {
  if (!id) id = 'all'
  switch (requestType) {
    case REQUEST.EVENT:
      requestType = 'get?event='
      break
    case REQUEST.USER:
      requestType = 'get?user='
      break
    default:
      throw new Error('Invalid request type!')
  }
  fetch(`http://${SERVER_IP}/${requestType}${id}`)
    .then((response) => response.json())
    .then((json) => setter(json))
    .catch((error) => console.log('GET Request Failed: ' + error))
}

export function sendData(requestType, data) {
  switch (requestType) {
    case REQUEST.EVENT:
      requestType = 'post?type=event'
      break
    case REQUEST.USER:
      requestType = 'post?type=user'
      break
    default:
      throw new Error('Invalid request type!')
  }
  fetch(`http://${SERVER_IP}/${requestType}`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(data),
  }).catch((error) => console.log('POST Request Failed: ' + error))
}
