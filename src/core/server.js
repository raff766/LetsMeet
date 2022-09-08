/* eslint-disable no-console */
import io from 'socket.io-client'

const SERVER_IP = '192.168.1.9:5000'
export const socket = io('http://' + SERVER_IP)

export const REQUEST = {
  EVENT: 0,
  USER: 1,
  USEREVENTS: 2,
  LOGIN: 3,
  LEAVEEVENT: 4,
  REMOVEEVENT: 5,
  PARTICIPANT: 6,
  CONVERSATIONS: 7,
  CONVERSATION: 8,
  MESSAGES: 9,
  PROFILE: 10,
}

export async function requestData(requestType, id) {
  if (!id) id = 'all'
  switch (requestType) {
    case REQUEST.EVENT:
      requestType = 'get?type=event&value='
      break
    case REQUEST.USER:
      requestType = 'get?type=user&value='
      break
    case REQUEST.USEREVENTS:
      requestType = 'get?type=userevents&value='
      break
    case REQUEST.CONVERSATIONS:
      requestType = 'get?type=conversations&value='
      break
    case REQUEST.MESSAGES:
      requestType = 'get?type=messages&value='
      break
    case REQUEST.PROFILE:
      requestType = 'get?type=profile&value='
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
    case REQUEST.PARTICIPANT:
      requestType = 'post?type=participant'
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
    case REQUEST.PROFILE:
      requestType = 'post?type=profile'
      break
    case REQUEST.CONVERSATION:
      requestType = 'post?type=conversation'
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
