const higherOrderAsync = (callback) => {
  setTimeout(callback(), 5000);
};

const callAboveFun = () => {
  console.log("Execute every 5 second");
};

higherOrderAsync(callAboveFun);
