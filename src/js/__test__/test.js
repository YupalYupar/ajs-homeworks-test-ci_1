import heroHealth from "../app";

test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Троль', health: 40 }, 'wounded'],
    [{ name: 'Гоблин', health: 10 }, 'critical'],
])('testing health for %p', (params, expected) => {
    const value = heroHealth(params);
    expect(value).toBe(expected);
})