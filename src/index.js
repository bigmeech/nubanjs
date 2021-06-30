const bankCodes = require('./bankcodes')

const nubanPattern = /(?<bankCode>\d{3})(?<acc>\d{6})(?<check>\d{1})/i

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
    if (bankCode.length !== 3) {
        throw new NubanError('invalid bank code length')
    }

    if (serialNumber.length !== 6) {
        throw new NubanError('Invalid account serial number length')
    }

    return `${bankCode}${separator}${serialNumber}`
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
}
