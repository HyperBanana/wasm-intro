declare function log(n: i32): void;

export function minusOne(n: i32): i32 {
  log(n);
  return n - 1;
}

export function fizzbuzz(n: i32): string | null {
    if (n % 15 === 0) {
        return 'fizzbuzz';
    }

    if (n % 3 === 0 ) {
        return 'fizz'
    }

    if (n % 5 ===0) {
        return 'buzz'
    }

    return null;
}

memory.grow(2); // 2 pages of memory = 2 x 64KB
store<u8>(0, 21);
store<u8>(1, 99);

export function readMemory(n: i32): i32 {
    return load<u8>(n);
}
