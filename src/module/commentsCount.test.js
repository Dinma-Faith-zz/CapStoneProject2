import { commentsCounter } from './commentCount.js';

test('lenght of the data array', async () => {
  expect.assertions(1);
  const data = await commentsCounter(1);

  expect(data.length).toEqual(7);
});

test('lenght of the data array', async () => {
  expect.assertions(1);
  const data = await commentsCounter(3);

  expect(data.length).toEqual(6);
});

test('lenght of the data array', async () => {
  expect.assertions(1);
  const data = await commentsCounter(5);

  expect(data.length).toEqual(8);
});
