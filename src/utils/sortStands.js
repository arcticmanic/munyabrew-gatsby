export const sortStands = (type, mark, view, country, shape, turn, stands) => {
  return stands.filter((stand) => {
    return (
      (type === "all" || type === stand.type) &&
      (mark === "all" || mark === stand.mark) &&
      (view === "all" || view === stand.view) &&
      (country === "all" || country === stand.country) &&
      (shape === "all" || shape === stand.shape) &&
      (turn === "all" || turn === stand.turn)
    );
  });
}
