const bubbleSort = (array) => {
    count = 1; // This count total number of steps includes in this sorting.

    for (let i = 0; i < array.length; i++) {
        let swapped = false; // Use swapped variable for optimized bubble sorting, if the array is already sorted..

        for (let j = 0; j < array.length - i - 1; j++) {
            console.log(`Step: ${count++}`);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                swapped = true;

                console.log(`Replaced [${array[j]}] with [${array[j + 1]}]`);
            }

            console.log(array);
        }

        // if (!swapped) break;
        console.log(`Array after ${i + 1} loop [${array}]`);
    }
    return array;
};

let array = [5, 2, 1, 4, 3];
console.log(`Given Array : [${array}]`);

const sortedArray = bubbleSort(array);

console.log(`Sorted Array Using Bubble Sort : [${sortedArray}]`);
