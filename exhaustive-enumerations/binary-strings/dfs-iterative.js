const iterativeDfs = n => {
    const stack = [''];
    const ans = [];
    while(stack.length > 0) {
        const node = stack.pop();
        // if reach at max length 
        if(node.length === n) {
            ans.push(node);
            continue;
        }
        // apply all possible child
        for (let i=0; i <= 9; i++) {
            stack.push(node + i);
        }
    }
    return ans;
}
console.log(iterativeDfs(3))