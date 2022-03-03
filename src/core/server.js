/* eslint-disable no-console */
const SERVER_IP = '10.40.150.240:5000'

export const REQUEST = {
  EVENT: 0,
  USER: 1,
  USEREVENTS: 2,
  LOGIN: 3,
  LEAVEEVENT: 4,
  REMOVEEVENT: 5,
}

export async function requestData(requestType, id) {
  if (!id) id = 'all'
  switch (requestType) {
    case REQUEST.EVENT:
      requestType = 'get?event='
      break
    case REQUEST.USER:
      requestType = 'get?user='
      break
    case REQUEST.USEREVENTS:
      requestType = 'get?event=userevents&user='
      break
    default:
      throw new Error('Invalid request type!')
  }
  try {
    const response = await fetch(`http://${SERVER_IP}/${requestType}${id}`)
    return await response.json()
  } catch (error) {
    return console.log('GET Request Failed: ' + error)
  }
}

export async function sendData(requestType, data) {
  switch (requestType) {
    case REQUEST.EVENT:
      requestType = 'post?type=event'
      break
    case REQUEST.USER:
      requestType = 'post?type=user'
      break
    case REQUEST.LOGIN:
      requestType = 'post?type=login'
      break
    case REQUEST.LEAVEEVENT:
      requestType = 'post?type=leaveevent'
      break
    case REQUEST.REMOVEEVENT:
      requestType = 'post?type=removeevent'
      break
    default:
      throw new Error('Invalid request type!')
  }
  try {
    const response = await fetch(`http://${SERVER_IP}/${requestType}`, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    return console.log('POST Request Failed: ' + error)
  }
}
