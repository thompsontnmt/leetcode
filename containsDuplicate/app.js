var nums = [1, 2, 2, 3, 1];
var containsDuplicate = (nums) => {
    let numsSet = new Set();
    for (const num of nums) {
        if (numsSet.has(num)) return true;

        numsSet.add(num);
    }
    return false;
}

containsDuplicate(nums);