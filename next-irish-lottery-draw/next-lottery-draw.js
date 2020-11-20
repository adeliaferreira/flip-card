function getNextIrishLotteryDraw(today) {
    const diffDaysOfWeeksToNextDraw = new Map([
      [0, 3],
      [1, 2],
      [2, 1],
      [3, 0],
      [4, 2],
      [5, 1],
      [6, 0]
    ]);
    const nextDraw = new Date();
    nextDraw.setDate(
      today.getDate() + diffDaysOfWeeksToNextDraw.get(today.getDay())
    );
    return nextDraw;
  }
//   const today = new Date();
//   console.log(getNextIrishLotteryDraw(today));