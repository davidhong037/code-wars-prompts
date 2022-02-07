function dateNbDays(a0, a, p) {
  const ln = Math.log;

  let days = Math.ceil((ln(a) - ln(a0))/ln(1 + p/36000));
  let date = new Date(2016, 0, 1 + days);
  return date.toISOString().split('T')[0];

}