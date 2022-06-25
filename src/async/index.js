const fnAsync = () => {
  return new Promise((res, rej) => {
    true ? setTimeout(() => res("ASYNC"), 3500) : rej(new Error("CHAAANN"));
  });
};

const anotherFn = async () => {
  const some = await fnAsync();
  console.log(some);
  console.log("Helloooow");
};

console.log("Before");
anotherFn();
console.log("after");
