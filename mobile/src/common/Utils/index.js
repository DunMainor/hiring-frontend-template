import reactotron from 'reactotron-react-native'
import Constants from '../Constants'

const { width, height } = Constants

export const formatMoney = (amount) => {
  const decimalCount = 0
  const decimal = '.'
  const thousands = ','
  const negativeSign = parseInt(Math.abs(Number(amount) || 0), 10) < 0 ? '-' : ''

  const i = parseInt(Math.abs(Number(amount) || 0).toFixed(decimalCount), 10).toString()
  const j = (i.length > 3) ? i.length % 3 : 0

  const formartedCurrency = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')

  return formartedCurrency
}

export const getDateFormated = (date) => {
  const dateObj = new Date(date);
  if (dateObj !== 'Invalid Date') {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = `0${dateObj.getDate()}`.slice(-2)
    const month = months[dateObj.getMonth()]
    const hours = `0${dateObj.getHours()}`.slice(-2)
    const minutes = `0${dateObj.getMinutes()}`.slice(-2)
    return `${month} ${day} ${hours}:${minutes}`
  }
  return ''
}

export const scaledSize = (size) => {
  // Use iPhone6 as base size which is 375 x 667
  const baseWidth = 375
  const baseHeight = 667
  const scaleWidth = width / baseWidth
  const scaleHeight = height / baseHeight
  const scale = Math.min(scaleWidth, scaleHeight)
  return Math.ceil((size * scale))
}

export const applyFiltersOnURI = (uri, filters) => `${uri}${filters?.reduce((acc, filter,indx) => `${acc}${filter?.criteria}=${filter?.value}&`, '')}`

export const titleCase = (str) => (str ? str?.trim()?.toLowerCase()?.split(' ')?.reduce((accumulator, current) => `${accumulator}${current.charAt(0)?.toUpperCase()}${current.slice(1)} `, '') : '')

export const getDayOfYear = (date) => Math.round((date.setHours(23) - new Date(date.getYear() + 1900, 0, 1, 0, 0, 0)) / 1000 / 60 / 60 / 24)

export const validateEmailAddress = (email_address) => email_address && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email_address)

export const validatePasswordStrength = (pass) => pass && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(pass)
