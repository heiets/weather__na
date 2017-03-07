export function getCurrent(arr) {
  return {
    type: 'GET_CURRENT',
    result: arr
  }
}
export function refresh(arr) {
  return {
    type: 'REFRESH',
    result: arr
  }
}
export function add(arr) {
  return {
    type: 'ADD',
    result: arr
  }
}
export function remove(arr) {
  return {
    type: 'REMOVE',
    result: arr
  }
}