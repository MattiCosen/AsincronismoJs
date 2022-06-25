const promise = new Promise(function (res, rej) {
  res("Todo esta OKA");
});

const cows = 7;

const countCows = new Promise(function (res, rej) {
  if (cows > 10) {
    res(`OHHH YEAHHHH ${cows} Hay lechita !!!`);
  } else {
    rej("OHHH NO !!!");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finalizado !!!");
  });
