let s: number = 5;
let v: number[] = new Array(s);
function metodo1(arr: number[], x: number, y: number) {
  let ax: number;
  ax = arr[x];
  arr[x] = arr[y];
  arr[y] = ax;
}
function metodo2(v: number[], s: number) {
  let i: number;
  let d: number;
  //let aux: number;
  i = 0;
  d = s - 1;
  while (i < d) {
    metodo1(v, i, d);
    i = i + 1;
    d = d - 1;
  }
}

metodo2(v, s);
for (let i: number = 0; i < s; i++) {
  console.log(metodo2(v, s));
}
