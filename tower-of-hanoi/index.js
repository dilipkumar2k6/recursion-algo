const towerOfHanoi = (n, src, dist, aux) => {
    if(n === 1) {
        console.log(`move disk from ${src} to ${dist}`);
        return;
    }
    // move n-1 top disks to aux
    towerOfHanoi(n-1, src, aux, dist);

    // move last from src to dist
    towerOfHanoi(1, src, dist, aux);

    // move n-1 disks from aux to dist
    towerOfHanoi(n - 1, aux, dist, src);
}

towerOfHanoi(20, 'A', 'B', 'C');