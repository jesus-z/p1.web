function invN(num) {
    let inv = 0;
    
    while (num > 0) {
        inv = inv * 10 + (num % 10);
        num = parseInt(num / 10); 
    }
    
    return inv;
}

console.log(invN(77358));