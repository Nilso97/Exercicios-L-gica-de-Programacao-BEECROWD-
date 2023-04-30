const productAttributes: Array<string[]> = [
    ["P", "M", "G"],
    ["Preto", "Branco"],
    ["Masculino", "Feminino"]
];

const cartesianProduct = (...arrays: Array<string[]>): string[][] => {
    const [arrayA, arrayB, ...rest] = arrays;
    const result: any[] = [];
    
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (Array.isArray(arrayA[i])) {
                result.push(
                    [...arrayA[i], arrayB[j]]
                );
            } else {
                result.push(
                    [arrayA[i], arrayB[j]]
                );
            }
        }
    }

    if (rest.length > 0) {
        return cartesianProduct(result, ...rest);
    }
    return result;
};

const result = cartesianProduct(...productAttributes);
console.log(result);