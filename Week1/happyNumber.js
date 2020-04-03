let isHappy = n => {
    if(n === 1) {
        return true;
    } else {
        let digits = n.toString().split('');
        let sum = 0;
        try {
            digits.forEach(digit => {
                sum += parseInt(digit) * parseInt(digit);
            });
        
            return isHappy(sum);
        } catch(err) {
            return false;
        }
        
    }
}