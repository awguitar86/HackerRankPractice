/* SALES BY MATCH */
// There is a large pile of socks that must be paired by color. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
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