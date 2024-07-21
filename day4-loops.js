for (let i= 1;i<=10;i++){
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`Sum: ${sum}`);

let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

let num = 5; // You can change this to any number
let factorial = 1;
let l = num;

do {
    factorial *= l;
    l--;
} while (l > 0);

console.log(`Factorial of ${num} is ${factorial}`);

let pattern = '';
for (let m = 1; m <= 5; m++) {
    for (let n = 1; n <= m; n++) {
        pattern += '*';
    }
    pattern += '\n';
}
console.log(pattern);


for (let o = 1; o <= 10; o++) {
  if (o === 5) {
      continue;
  }
  console.log(o);
}

for (let p = 1; p <= 10; p++) {
  if (p === 7) {
      break;
  }
  console.log(p);
}



