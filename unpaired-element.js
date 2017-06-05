// Unpaired element

function unpairedElement(A) {
    let testItem;
    while(A.length > 1) {
        testItem = A.shift();
        for (let i = 0; i < A.length; i++) {
            if (testItem === A[i]) {
                A.splice(i, 1);
                break;
            }
        }
    }
    return A[0];
}
