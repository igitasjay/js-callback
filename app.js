let number;
number = 10;

function answerIt() {
  console.log(
    number === 0
      ? "zero"
      : number < 10
      ? "Less"
      : number > 10
      ? "Greater"
      : number === 10
      ? "equal"
      : "something different"
  );
}

answerIt();
