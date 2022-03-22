function solution(n, k, cmd) {
  let curr = k;

  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      prev: i - 1,
      next: i + 1,
      deleted: false,
    });
  }

  let removed = [];

  const moveUp = step => {
    let index = 0;

    while (index < step) {
      curr = arr[curr].prev;
      index += 1;
    }
  };

  const moveDown = step => {
    let index = 0;

    while (index < step) {
      curr = arr[curr].next;
      index += 1;
    }
  };

  const remove = () => {
    arr[curr].deleted = true;
    removed.push(curr);

    if (arr[curr].prev === -1) {
      arr[arr[curr].next].prev = -1;
    } else if (arr[curr].next === n) {
      arr[arr[curr].prev].next = n;
    } else {
      arr[arr[curr].prev].next = arr[curr].next;
      arr[arr[curr].next].prev = arr[curr].prev;
    }

    curr = arr[curr].next === n ? arr[curr].prev : arr[curr].next;
  };

  const restore = () => {
    const toBeRestored = removed.pop();

    if (arr[toBeRestored].prev === -1) {
      arr[arr[toBeRestored].next].prev = toBeRestored;
    } else if (arr[toBeRestored].next === n) {
      arr[arr[toBeRestored].prev].next = toBeRestored;
    } else {
      arr[arr[toBeRestored].next].prev = toBeRestored;
      arr[arr[toBeRestored].prev].next = toBeRestored;
    }

    arr[toBeRestored].deleted = false;
  };

  for (const c of cmd) {
    const [command, step] = c.split(' ');
    switch (command) {
      case 'U':
        moveUp(step);
        break;
      case 'D':
        moveDown(step);
        break;
      case 'C':
        remove();
        break;
      case 'Z':
        restore();
        break;
    }
  }
  return arr.map(({ deleted }) => (deleted ? 'X' : 'O')).join('');
}
