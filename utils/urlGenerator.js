const generator = ()=>{
    const choice = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let s = ""
    for(let i=0;i<7;i++){
        const x = choice[Math.floor((Math.random() * choice.length))];
        s+= x;
    }
    return s
}

module.exports = generator