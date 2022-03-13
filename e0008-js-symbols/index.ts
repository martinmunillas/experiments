const a: any = {
  name: "martin",
};

a[Symbol.toPrimitive] = () => 2;
a.valueOf = () => 3;

console.log(3 + a);
