const nuban = require('../src')

describe('v1', () => {
    describe('parse', () => {
        test('should return parts of a nuban number', () => {
            const result = nuban.parse('1234567890')
            expect(result.bankCode).toBe('123')
        })
    })
    describe('stringify', () => {
        test('should return a nuban number from parts without separator', () => {
            const result = nuban.stringify('033', '123456')
            expect(result).toBeDefined()
        })

        test('should return a nuban number from parts with / as separator', () => {
            const result = nuban.stringify('033', '123456', '/')
            expect(result).toBe('033/123456')
        })

        test('should return a nuban number from parts with - as separator', () => {
            const result = nuban.stringify('033', '123456', '-')
            expect(result).toBe('033-123456')
        })
    })
    describe('lookup', () => {
        test('should take 033 prefix and return United Bank for Africa Plc as name', () => {
            const result = nuban.lookup('0331234561')
            expect(result).toBe('United Bank for Africa Plc')
        })
        test('should take 044 prefix and return Access Bank Nigeria Plc as name', () => {
            const result = nuban.lookup('0441234561')
            expect(result).toBe('Access Bank Nigeria Plc')
        })
        test('should take 050 prefix and return Ecobank Nigeria as name', () => {
            const result = nuban.lookup('0501234561')
            expect(result).toBe('Ecobank Nigeria')
        })
        test('should take 063 prefix and return Diamond Bank Plc as name', () => {
            const result = nuban.lookup('0631234561')
            expect(result).toBe('Diamond Bank Plc')
        })
        test('should take 084 prefix and return Enterprise Bank Plc as name', () => {
            const result = nuban.lookup('0841234561')
            expect(result).toBe('Enterprise Bank Plc')
        })
        test('should take 070 prefix and return Fidelity Bank Plc as name', () => {
            const result = nuban.lookup('0701234561')
            expect(result).toBe('Fidelity Bank Plc')
        })
        test('should take 011 prefix and return First Bank of Nigeria Plc as name', () => {
            const result = nuban.lookup('0111234561')
            expect(result).toBe('First Bank of Nigeria Plc')
        })
        test('should take 214 prefix and return First City Monument Bank as name', () => {
            const result = nuban.lookup('2141234561')
            expect(result).toBe('First City Monument Bank')
        })
        test('should take 058 prefix and return Guaranty Trust Bank Plc as name', () => {
            const result = nuban.lookup('0581234561')
            expect(result).toBe('Guaranty Trust Bank Plc')
        })
        test('should take 030 prefix and return Heritaage Banking Company Ltd as name', () => {
            const result = nuban.lookup('0301234561')
            expect(result).toBe('Heritaage Banking Company Ltd')
        })
        test('should take 301 prefix and return Jaiz Bank as name', () => {
            const result = nuban.lookup('3011234561')
            expect(result).toBe('Jaiz Bank')
        })
        test('should take 082 prefix and return Keystone Bank Ltd as name', () => {
            const result = nuban.lookup('0821234561')
            expect(result).toBe('Keystone Bank Ltd')
        })
        test('should take 014 prefix and return Mainstreet Bank Plc as name', () => {
            const result = nuban.lookup('0141234561')
            expect(result).toBe('Mainstreet Bank Plc')
        })
        test('should take 076 prefix and return Skye Bank Plc as name', () => {
            const result = nuban.lookup('0761234561')
            expect(result).toBe('Skye Bank Plc')
        })
        test('should take 039 prefix and return Stanbic IBTC Plc as name', () => {
            const result = nuban.lookup('0391234561')
            expect(result).toBe('Stanbic IBTC Plc')
        })
        test('should take 232 prefix and return Sterling Bank Plc as name', () => {
            const result = nuban.lookup('2321234561')
            expect(result).toBe('Sterling Bank Plc')
        })
        test('should take 032 prefix and return Union Bank Nigeria Plc as name', () => {
            const result = nuban.lookup('0321234561')
            expect(result).toBe('Union Bank Nigeria Plc')
        })
        test('should take 215 prefix and return Unity Bank Plc as name', () => {
            const result = nuban.lookup('2151234561')
            expect(result).toBe('Unity Bank Plc')
        })
        test('should take 035 prefix and return WEMA Bank Plc as name', () => {
            const result = nuban.lookup('0351234561')
            expect(result).toBe('WEMA Bank Plc')
        })
        test('should take 057 prefix and return Zenith Bank International as name', () => {
            const result = nuban.lookup('0571234561')
            expect(result).toBe('Zenith Bank International')
        })
    })
})
