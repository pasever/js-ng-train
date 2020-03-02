var arr = [ 5, 2, 1, 444, 234, 46, 10, 443, 700 ];

function sortAsc(arr) {
    var isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                isSorted = false;
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}


function sortDesc(arr) {
    var isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                isSorted = false;
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(sortAsc(arr));
console.log(sortDesc(arr));