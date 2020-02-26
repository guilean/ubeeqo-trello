export function isEmpty(object) {
  return Object.entries(object).length === 0 && object.constructor === Object;
}

export function generateId() {
  if (localStorage.getItem("lastId")) {
    const newId = JSON.parse(localStorage.getItem("lastId")) + 1;
    localStorage.setItem("lastId", newId);
    return newId;
  } else {
    localStorage.setItem("lastId", 1);
    return 1;
  }
}

export function reorder(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
