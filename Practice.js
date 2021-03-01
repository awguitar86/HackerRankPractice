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

/* FIRST DUPLICATE
Given an array [a] that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index.
In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of
the other number does. If there are no such elements, return -1. */
function firstDuplicate(a) {
    for (let i of a) {
      let posi = Math.abs(i) - 1
      if (a[posi] < 0) return posi + 1
      a[posi] = a[posi] * -1
    }
    return -1
}

/* FIRST NOT REPEATING CHARACTER
Given a string 's' consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.*/
function firstNotRepeatingCharacter(s) {
	let strings = s.split('');
	let repeating = {};
	let nonRepeat = '';
	for (let i = 0; i < s.length; i++) {
		repeating[strings[i]] ? repeating[strings[i]]++ : repeating[strings[i]] = 1;
	}
	for (let str in repeating) {
		!nonRepeat && repeating[str] === 1 ? nonRepeat = str : null;
	}
	return nonRepeat ? nonRepeat : '_';
}

/* ROTATE IMAGE
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.
You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).*/
function rotateImage(a) {
	let nestedArrs = [];
	for (let i = 0; i < a.length; i++) {
		nestedArrs.push([]);
	}
	for (let i = 0; i < a.length; i++) {
		for (let x = 0; x < a[i].length; x++) {
			nestedArrs[x].unshift(a[i][x]);
		}
	}
	return nestedArrs;
}

/* SUDOKU 2
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row,
and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
Implement an algorithm that will check whether the given [grid] of numbers represents a valid Sudoku puzzle according to the layout
rules described above. Note that the puzzle represented by grid does not have to be solvable.*/


/* STATE OBJECT TO TREE REPRESENTATION */
// Write a function that converts a portion of a normalized state object to a tree representation. The store has the following shape:
/* Store Types
type Store = {
    forms: { [key: string]: Form };
    pages: { [key: string]: Page };
    sections: { [key: string]: Section };
    fields: { [key: string]: Field };
  }

  type Form = {
    id: string;
    name: string;
    pages: string[];
  };

  type Page = {
    id: string;
    title: string;
    sections: string[];
  };

  type Section = {
    id: string;
    title: string;
    fields: string[];
  };

  type Field = {
    id: string;
    label: string;
    name: string;
    type: string;
    value: string;
  };
*/
// Your function will build a tree representation of a form. It should except two arguments.
// - an object of the specified store shape.
// - a form id string
// It should return an object with a complete form tree. For example:
// input
const store = {
    forms: { 1: { id: 1, name: 'Basic Form', pages: [1] } },
    pages: { 1: { id: 1, title: 'Page one', sections: [1, 2] } },
    sections: {
      1: { id: 1, title: 'Personal Info', fields: [1, 2] },
      2: { id: 2, title: 'Other', fields: [3] },
    },
    fields: {
      1: { id: 1, name: 'first_name', label: 'First Name', type: 'text', value: '' },
      2: { id: 2, name: 'last_name', label: 'Last Name', type: 'text', value: '' },
      3: { id: 3, name: 'email', label: 'Email', type: 'email', value: '' },
    }
  }

  getFormTree(store, '1');

  // output
  let object = {
    id: 1,
    name: 'Basic Form',
    pages: [
      {
        id: 1,
        title: 'Page one',
        sections: [
          {
            id: 1,
            title: 'Personal Info',
            fields: [
              { id: 1, name: 'first_name', label: 'First Name', type: 'text', value: '' },
              { id: 2, name: 'last_name', label: 'Last Name', type: 'text', value: '' }
            ]
          },
          {
            id: 2,
            title: 'Other',
            fields: [
              { id: 3, name: 'email', label: 'Email', type: 'email', value: '' }
            ]
          }
        ]
      }
    ]
  }

// Write Code in function below.
function restructure(store, id) {
    let obj = {};
    for (let form in store.forms) {
        if (form.id === id) {
            obj = {
                ...form,
                pages: form.pages.map((page) => {
                  for (let p in store.pages) {
                    if (p.id === page) {
                      return p;
                    }
                  }
                }),
            }
        }
    }
}