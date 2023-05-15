/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const targetIndex = arr.length - 1;
    if (targetIndex < 1) return 0;

    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (!map.has(val)) map.set(val, []);
        map.get(val).push(i);
    }

    const checkedIndexes = new Array(arr.length).fill(false);
    let stepCount = 0;
    let currentStepIndexes = [targetIndex];

    while (currentStepIndexes.length > 0) {
        let nextStepIndexes = [];
        for (let i = 0; i < currentStepIndexes.length; i++) {
            const currentStepIndex = currentStepIndexes[i];

            checkedIndexes[currentStepIndex] = true;

            if (currentStepIndex === 0) return stepCount;

            // -1
            const prevIndex = currentStepIndex - 1;
            if (!checkedIndexes[prevIndex]) {
                if (prevIndex === 0) return stepCount + 1;
                nextStepIndexes.push(prevIndex);
                checkedIndexes[prevIndex] = true;
            }

            // jumps
            const jumps = map.get(arr[currentStepIndex]);
            if (jumps) {
                map.delete(arr[currentStepIndex]);
                for (let j = 0; j < jumps.length; j++) {
                    const jumpIndex = jumps[j];
                    if (jumpIndex !== currentStepIndex && !checkedIndexes[jumpIndex]) {
                        if (jumpIndex === 0) return stepCount + 1;
                        nextStepIndexes.push(jumpIndex);
                        checkedIndexes[jumpIndex] = true;
                    }
                }
            }

            // +1
            const nextIndex = currentStepIndex + 1;
            if (nextIndex <= targetIndex && !checkedIndexes[nextIndex]) {
                nextStepIndexes.push(nextIndex);
                checkedIndexes[nextIndex] = true;
            }
        }
        currentStepIndexes = nextStepIndexes;
        stepCount++;
    }

    return stepCount;
};