var nums = [];
for(var i=0;i<10;++i){
    nums[i] = Math.floor(Math.random() * 100);
}

function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
findMin(nums);
console.log(nums);
console.log(findMin(nums));
console.log(findMax(nums));
