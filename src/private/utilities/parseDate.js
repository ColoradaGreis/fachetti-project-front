export function parseDate (date) {
  const allDate = date.split(' ')
  const yearOnly = allDate[0].split('/')[2].split('').slice(2, 4).join('')
  const newDate = allDate[0].split('/')[0] + '/' + allDate[0].split('/')[1] + '/' + yearOnly
  const timeOnly = allDate[1].split(':')
  timeOnly.pop()
  return `${newDate} ${timeOnly.join(':')}`
}
