function add(numbers) {
  // With empty string
    if (numbers === "") {
        return 0;
    }

  // With a zero
   if (numbers === "0") {
        return 0;
    }

  // Handle two numbers
  // const numArray = numbers.split(",");
  //   if (numArray.length === 2) {
  //       return parseInt(numArray[0]) + parseInt(numArray[1]);
  //   }

  // Ignore Numbers Greater Than 1000
  // let sum = 0;
  //   for (let num of numArray) {
  //       const parsedNum = parseInt(num);
  //       if (parsedNum <= 1000) {
  //           sum += parsedNum;
  //       }
  //   }
  //   return sum;
}

module.exports = {
    add,
};

