// https://leetcode.com/problems/find-the-duplicate-number/description/
const temp = [1, 2, 3, 4, 2];

const input = [4, 1, 2, 3, 4];

function best_solve(nums) {
  // O(n) time, O(1) space
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
// Explaination: By using arr[arr[i] % n] = arr[arr[i] % n] + n,
// So, Each element in the array will be added by n, and the duplicate number will be added by 2n.
// So, if duplicated item > 2n

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
// Explaination: The idea is to use the same idea as the linked list cycle detection.
console.log(best_solve(input));
