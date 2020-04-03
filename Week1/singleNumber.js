let singleNumber = nums => {
    let valuesMapper = new Map();
    for (i = 0; i < nums.length; i++) {
        if(i === 0) {
            valuesMapper.set(nums[i], 1);
        } else {
            if(valuesMapper.has(nums[i])) {
                valuesMapper.set(nums[i], valuesMapper.get(nums[i]) + 1);
            } else {
                valuesMapper.set(nums[i], 1);
            }
        }
    }

    let uniqueValue = 0;
    valuesMapper.forEach((key, value) => {
        if(key === 1) {
            uniqueValue = value;
        }
    });

    return uniqueValue;
}