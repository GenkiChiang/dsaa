import { compose, random } from "lodash/fp";

export const randomNumber = () => {
  return random(1000_000_000, true);
};

export const randomString = (length = random(50, false)) => {
  const toStringBy36 = (value: number) => value.toString(36);
  const slice = (string: string) => string.slice(0, length);
  return compose(slice, toStringBy36, randomNumber)();
};

export const randomStringList = (length: number, stringLength: number = 10) => {
  const stringList: string[] = [];
  let index = 0;
  while (index < length) {
    index++;
    stringList.push(randomString(length));
  }
  return stringList;
};

export const randomBoolean = () => !random(0, 1);

export const sleep = (delay = 500) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, delay)
  );

export const nextTick = (callback: () => void): void => {
  setTimeout(() => {
    callback();
  }, 0);
};
