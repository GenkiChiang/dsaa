import { compose, random } from "lodash/fp";
import debug from "debug";

export const randomNumber = (max = 1000_000_000) => {
  return random(max, false);
};

export const randomNumberList = (
  length: number,
  max: number = 1000_000_000
) => {
  const list: number[] = [];
  let index = 0;
  while (index < length) {
    index++;
    list.push(randomNumber(max));
  }
  return list;
};
export const randomString = (length = random(50, false)) => {
  const toStringBy36 = (value: number) => value.toString(36);
  const slice = (string: string) => string.slice(0, length);
  return compose(slice, toStringBy36, randomNumber)();
};

export const randomStringList = (length: number, stringLength: number = 10) => {
  const list: string[] = [];
  let index = 0;
  while (index < length) {
    index++;
    list.push(randomString(stringLength));
  }
  return list;
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

debug.enable("dev:*");
export const devLog = debug("dev:debug");
export const devError = debug("dev:error");
export const devInfo = debug("dev:info");
