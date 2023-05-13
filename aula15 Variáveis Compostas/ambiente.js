let num = [5, 8, 6, 9];
num[4] = 3;
num.push(7);

console.log(`Nosso vetor tem ${num.length} posições`);
let pos = num.indexOf(2);
if (pos == -1) {
  console.log(`O valor não foi encontrado`);
} else {
  console.log(`O valor 4 está na posição ${pos}`);
}
