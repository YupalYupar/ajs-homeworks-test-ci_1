import heroHealth from "../app";

test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Троль', health: 40 }, 'wounded'],
    [{ name: 'Гоблин', health: 10 }, 'critical'],
])('testing health for %p', (params, expected) => {
    const value = heroHealth(params);
    expect(value).toBe(expected);
});

// import healthIndicator from '../app';

// test.each([
//     [{ name: 'char1', health: 90 }, 'healthy'],
//     [{ name: 'char2', health: 45 }, 'wounded'],
//     [{ name: 'char3', health: 5 }, 'critical'],
// ])('testing health status for %p', (object, expected) => {
//     const result = healthIndicator(object);
//     expect(result).toBe(expected);
// });