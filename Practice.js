/* SALES BY MATCH
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */
function sockMerchant(n, ar) { // 1st Solution
	let pairs = 0;
    let socks = {};
    for (let i = 0; i < n; i++) {
        socks[ar[i]] ? socks[ar[i]]++ : socks[ar[i]] = 1;
    }
	for (let color in socks) {
		pairs += Math.floor(socks[color] / 2);
	}
	return pairs;
}
function sockMerchant(n, ar) { // 2nd Solution
    let sorted = ar.sort((a,b) => a - b);
    let pairs = 0;
    for (let i = 0; i < n - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }
    return pairs;
}

/* COUNTING VALLEYS 
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly n steps, for every step it was noted if it was an uphill, U, or a downhill, D, step. 
Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. */
function countingValleys(steps, path) {
    let pathArr = path.split('');
    let vallies = 0;
    let seaLevel = 0;
    let inValley = false;
    for (let step of pathArr) {
        step === 'U' ? seaLevel++ : seaLevel--;
        if (seaLevel < 0 && !inValley) {
            vallies++;
            inValley = true;
        } else if (seaLevel >= 0 && inValley) {
            inValley = false;
        }
    }
    return vallies;
}