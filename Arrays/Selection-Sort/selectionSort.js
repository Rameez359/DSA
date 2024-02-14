const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minimum = i; // Assign first unsorted element to minimum

        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minimum]) {
                minimum = j; //if any other element which is smaller than minimum, set as minimum
            }
        }
        let temp = array[i]; // At the end of inner loop swap minimum element with the first unsorted element of array i.e i.
        array[i] = array[minimum];
        array[minimum] = temp;

        console.log(`Array after ${i + 1} iteration: [${array}]`);
    }
    return array;
};

let array = [10, 12, 8, 9, 1];

console.log(`Unsorted Array: [${array}]`);

let sortedArray = selectionSort(array);

console.log(`Sorted Array Using Bubble Sort: [${sortedArray}]`);
