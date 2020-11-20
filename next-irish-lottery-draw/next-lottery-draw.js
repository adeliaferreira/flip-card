function getNextIrishLotteryDraw(currentDate = new Date()) {
  const diffDaysOfWeeksToNextDraw = new Map([
    [0, 3],
    [1, 2],
    [2, 1],
    [3, 0],
    [4, 2],
    [5, 1],
    [6, 0]
  ]);
  let nextDrawDay =
    currentDate.getDate() + diffDaysOfWeeksToNextDraw.get(currentDate.getDay());
  const nextDraw = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    nextDrawDay,
    19,
    55,
    0,
    0
  );
  if (currentDate > nextDraw) {
    let nextDayIndex = currentDate.getDay();
    nextDayIndex = nextDayIndex === 6 ? 0 : nextDayIndex + 1;
    nextDrawDay =
      currentDate.getDate() + diffDaysOfWeeksToNextDraw.get(nextDayIndex);
      nextDrawDay += 1;
    nextDraw.setDate(nextDrawDay);
  }
  return nextDraw;
}
//   const today = new Date();
//   console.log(getNextIrishLotteryDraw(today));