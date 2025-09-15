// Program to Understand Binary Search in js
let nums = [1,2,3,4,5,6,7,8,9];
let target = 6;

var find = function binarysearch(nums, target){
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = low + Math.floor((high - low) /2);
        if(nums[mid] === target) return true;
        else if(nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
};

console.log(find(nums, target));
console.log(find(nums, null));
console.log(find(nums, 10));
console.log(typeof find);
console.log(typeof binarysearch);