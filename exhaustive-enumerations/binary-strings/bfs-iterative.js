const iterativeBfs = n => {
    if (n === 0) {
        return '';
    }
    const queue = ['']
    const ans = [];
    while(queue.length > 0) {
        const size = queue.length;
        
        for (let i=0; i < size; i++) {
            const node = queue.shift();
            // if not size is same as n then add into ans
            if(node.length === n) {
                ans.push(node);
                continue;
            }
            // Add all possible digits
            for(let j=0; j <=9; j++) {
                queue.push(node + j);
            } 
        }
    }

    return ans; 
}
console.log(iterativeBfs(2))