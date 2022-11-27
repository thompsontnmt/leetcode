var target = 15;
var nums = [1, 3, 7, 4, 10, 8];

/**
 * find the two numbers that add up to the target.
 * return the indices of the two numbers
 * if there are no numbers, return 0
 * 
 * Logic: iterate through each number in the array and Map the value of the number to the index of the number. Check to see if the current number adds up to the target with a stored value in the Map.
 */

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }
    console.log(map);
    return 0;
}

twoSum(nums, target);