const request = require('supertest');
const app = require('../lib/app');

// describe('example test - you should probably update me', () => {
//   it('home route should return hello world', async () => {
//     const resp = await request(app).get('/');
//     expect(resp.text).toEqual('hello world!');
//   });
// });
const { zodiacs } = require('../lib/zodiac-data');

// need to make tests work first!
describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const expected = {
      id: '1',
      name: 'sagittarius',
      dates: 'Nov 22 - Dec 21',
      symbol: 'Archer',
    };
    expect(res.body).toEqual(expected);
  });
});
