interface StoreData<T> {
  data: T[];
};

const storeNumber: StoreData<number> = {
  data: [1, 2, 4],
};

console.log(storeNumber);