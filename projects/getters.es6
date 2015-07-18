export function list(state) {
  return Object.keys(state).map(k => state[k]);
}
