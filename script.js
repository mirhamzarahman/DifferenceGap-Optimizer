/**
 * DifferenceGap Optimizer
 * -----------------------
 * Calculates the smallest possible difference between
 * two resource values after allocating their maximum
 * shared portion.
 */

/**
 * Returns the minimum remaining difference between two values.
 *
 * @param {number} firstResource
 * @param {number} secondResource
 * @returns {number}
 */
function minimizeDifference(firstResource, secondResource) {
    const maximumSharedAllocation = Math.min(firstResource, secondResource);

    const remainingDifference =
        firstResource +
        secondResource -
        (2 * maximumSharedAllocation);

    return remainingDifference;
}

// -----------------------------
// Example Usage
// -----------------------------

const resourceA = 15;
const resourceB = 9;

const result = minimizeDifference(resourceA, resourceB);

console.log("Resource A:", resourceA);
console.log("Resource B:", resourceB);
console.log("Minimum Remaining Difference:", result);

module.exports = {
    minimizeDifference
};
