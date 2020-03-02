// Simple binary

const arr = [ 1, 3, 5, 7, 9 ];

function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = low + high;
        let guess = list[mid];

        console.log('mid', mid);
        console.log('high', high);
        console.log('guess', guess);

        if (guess === item) {
            return { index: mid };
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            return { index: 'Not found' };
        }
    }
}

console.log(binary_search(arr, 1));