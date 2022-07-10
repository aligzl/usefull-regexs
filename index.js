/* Camel case to snake case */
const camelToSnake = str => str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()

/* Snake case to camel case */
const snakeToCamel = str => str.replace(/(\_\w)/g, m => m[1].toUpperCase())

/* Camel case to kebab case */
const camelToKebab = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

/* Kebab case to camel case */
const kebabToCamel = str => str.replace(/(\-\w)/g, m => m[1].toUpperCase())

/* mongodb _id */
const mongodbId = str => /^[a-f\d]{24}$/.test(str)

/* Turkish Phone Number Regex */
const phone = phoneNumber => /^(0\s)?([0-9]{3})\s??([0-9]{3})\s??([0-9]{2})\s??([0-9]{2})$/.test(phoneNumber)

/* Turkish Tax Number Regex */
const taxNumber = taxNumber => /^[0-9]{10}$/.test(taxNumber)

/* Turkish Postal Code Regex */
const postalCode = postalCode => /^[0-9]{5}$/.test(postalCode)

/* Turkish Identification Number Regex */
const identificationNumber = identificationNumber => /^[1-9]{1}[0-9]{9}[02468]{1}$/.test(identificationNumber)

/* Turkish Car Plate Number Regex */
const carPlateNumber = carPlateNumber => /^(0[1-9]|[1-7][0-9]|8[01])(\s)(([A-Z])(\s)(\d{4,5})|([A-Z]{2})(\s)(\d{3,4})|([A-Z]{3})(\s)(\d{2}))+$/g.test(carPlateNumber)

/* Turkish IBAN Regex */
// Format: TR00 0000 0000 0000 0000 0000 00, TR000000000000000000000000
const iban = iban => /^TR\d{2}\s?([0-9a-zA-Z]{4}\s?){5}[0-9a-zA-Z]{2}$/.test(iban)

/* Birth Date Regex */
// Formats are: dd.mm.yyyy, dd/mm/yyyy, dd-mm-yyyy , dd mm yyyy, ddmmyyyy
const birthDate = birthDate => /^([1-9]|[12][0-9]|3[01])(|\/|\.|\-|\s)?(0[1-9]|1[12])\2(19[0-9]{2}|200[0-9]|201[0-8])$/.test(birthDate)

/* Email Regex */
const email = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
