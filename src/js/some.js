function sum(...numbers) {
    let sum = 0;
    for (let key of numbers) {
        sum += key;
    }
    return sum;
}


class SomeMath {
    avg(...numbers) {
        return sum(...numbers) / numbers.length;
    }

    max(...numbers) {
        let max = -Infinity;

        for (let key of numbers) {
            if (key > max) {
                max = key;
            }
        }
        return max;
    }

    merge(a, b) {
        console.log(a);

        return {
            ...a,
            ...b
        }
    }
}

export default new SomeMath();