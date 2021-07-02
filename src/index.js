const bankCodes = require('./bankcodes')

const nubanPattern = /(?<bankCode>\d{3})(?<acc>\d{6})(?<check>\d{1})/i

/**
 *
 * @param input
 * @param spreadValue
 * @returns {*}
 */
function getCheckDigit(input, spreadValue = '373') {
    const result = 10 - (
        input.split('')
            .map((char, id) => [char, spreadValue[id % spreadValue.length]])
            .map((arr) => parseInt(arr[0]) * parseInt(arr[1]))
            .reduce((curr, acc) => curr + acc) % 10
    )
    return (result === 10) ? 0 : result;
}

/**
 * takes in a nuban number and returns its constituent parts
 * @param input
 * @returns {{bankCode?: string, acc?: string, check?: string}|{[p: string]: string}|*}
 */
function parse(input) {
    if (!nubanPattern.test(input)) {
        throw new NubanError('Invalid NUBAN string')
    }

    const match = nubanPattern.exec(input)
    return match.groups
}

/**
 * take constinient parts and construct a valid nuban number
 * @param bankCode
 * @param serialNumber
 * @returns {string}
 */
function stringify(bankCode, serialNumber, separator = null) {
    const dirtyNuban = bankCode + serialNumber
    if (bankCode.length !== 3) {
        throw new NubanError('invalid bank code length')
    }

    if (serialNumber.length !== 6) {
        throw new NubanError('Invalid account serial number length')
    }
    return `${bankCode}${separator}${serialNumber}${separator}${getCheckDigit(
        dirtyNuban
    )}`
}

function lookup(nuban) {
    return bankCodes[nuban.substring(0, 3)]
}

class NubanError extends Error {
    constructor(msg) {
        super(msg)
    }
}

module.exports = {
    parse,
    stringify,
    lookup,
    getCheckDigit,
}
