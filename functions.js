/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
const numberToString = (n) => {
    return n.toString()
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
const increase = (n) => {
    return ++n
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
const decrease = (n) => {
    return --n
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
const add = (x, y) => {
    return x + y
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 const subtract = (x, y) => {
    return x - y
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
 const multiply = (x, y) => {
    return x * y
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 const divide = (x, y) => {
    return x / y
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
 const square = (x, y) => {
    return x * x
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 const calculate = (operation, x, y) => {
    var z;

    switch (operation) {
        case 'add':
            z = x + y
            console.log(`${x} + ${y} = ${z}`)
            break
        case 'subtract':
            z = x - y
            console.log(`${x} - ${y} = ${z}`)
            break
        case 'multiply':
            z = x * y
            console.log(`${x} * ${y} = ${z}`)
            break
        case 'divide':
            z = x / y
            console.log(`${x} / ${y} = ${z}`)
            break
    }

    return z
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
const isGreaterThan = (x, y) => {
    return x > y
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
const isLessThan = (x, y) => {
    return x < y
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
const areEqual = (x, y) => {
    return x === y
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
const minimum = (x, y) => {
    return (x < y) ? x : y
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
const maximum = (x, y) => {
    return (x > y) ? x : y
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
const isEven = (n) => {
    return n % 2 == 0
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
const isOdd = (n) => {
    return n % 2 != 0
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
const letterGrade = (score, total) => {
    const percent = score / total * 100
    if (percent < 60) {
        return 'F'
    } else if (percent < 70) {
        return 'D'
    } else if (percent < 80) {
        return 'C'
    } else if (percent < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
const incrementReviews = (restaurant) => {
    if (restaurant.reviews) {
        restaurant.reviews ++
    } else {
        restaurant.reviews = 1
    }

    return restaurant
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
const combine = (word1, word2) => {
    return word1.concat(' ', word2)
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
const createCircle = (radius) => {
    return circle = {
        circumference: 2 * Math.PI * radius,
        area: Math.PI * radius * radius
    }
}
