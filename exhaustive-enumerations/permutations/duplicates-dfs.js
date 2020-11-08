var permute = function (nums) {
    let ans = [];
    helper([], ans, nums);
    return ans;
  };
  function helper(slate, ans, choices) {
    if (choices.length === 0) {
      ans.push([...slate]);
    }
    for (let i = 0; i < choices.length; i++) {
      let options = choices.filter((a, k) => k !== i);
      slate.push(choices[i]);
      helper(slate, ans, options);
      slate.pop();
      // skip all duplicates
      while(choices[i] === choices[i+1]) {
          i++;
      }
    }
  }
  console.log(permute([1, 2, 2]));
  