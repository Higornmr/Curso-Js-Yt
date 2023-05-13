function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 5));

// pode passar os parametros assim para evitar de dar um resultado NaN quando se passa apenas um parametro na ação
function somaDois(nr1 = 0, nr2 = 0) {
  return nr1 + nr2;
}

console.log(somaDois(7));
