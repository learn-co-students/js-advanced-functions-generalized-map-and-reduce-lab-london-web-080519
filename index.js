// Add your functions here
let map = (arr, func) => {
    let answer = []
    for (let i=0; i<arr.length; i++) {
        answer.push(func(arr[i]))
    }
    return answer
}


const reduce = (arr, func, sp) => {
    let memo = sp;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 && memo === undefined) {
        memo = arr[0];
      } else {
        memo = func(arr[i], memo);
      }
    }
    return memo;
  };