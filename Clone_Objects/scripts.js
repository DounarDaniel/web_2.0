const original = {
    a: 1,
    b: {
        c: 2
    }
};
for(let key in original){
    clone[key] = original[key];
};
console.log(clone);
clone.b = 3;
console.log(original);