
// You should implement your task here.

module.exports = function towelSort (matrix) {

let result = [];

if (arguments.length !== 1) {
    return [];
}

if (matrix.length === 0) {
    return [];
} else {
    let length = matrix.length;

    for (let i=0; i<length; i++) {

        if ((i === 0) || (i % 2 === 0)) {
            matrix[i].forEach(number => {
                result.push(number);
            })

        } else {
            let arr = [...matrix[i]];
            arr.reverse();
            arr.forEach(number => {
                result.push(number);
            })
        }
    }
}
    return result;

}


