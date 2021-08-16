function orderStraight(m, b) {
  document.write(m);
  return m === b ? 1 : orderStraight(++m, b);
}

function orderReverse(m, b) {
  document.write(m);
  return m === b ? 1 : orderReverse(m, --b);
}