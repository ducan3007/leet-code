// https://leetcode.com/problems/find-the-duplicate-number/description/
const temp = [1, 2, 3, 4, 2];

const input = [1, 2, 3, 4, 5];

function best_solve(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[nums[i] % n] = nums[nums[i] % n] + n;
  }
  console.log(nums);
  for (let i = 0; i < n; i++) {
    if (nums[i] > n * 2) {
      return i;
    }
  }
}
// Explaination by copilot: https://www.youtube.com/watch?v=32Ll35mhWg0 

function turtle_hare(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

console.log(best_solve(input));
