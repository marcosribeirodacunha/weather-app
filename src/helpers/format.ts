/*
FORMAT TYPES:
  --> wmdhm = WEEK, MONTH DD, HH:MM
  --> wd = WEEK DD
  --> w = WEEK
  --> hd = HH:DD
  --> md = MONTH DD
*/

export function formatDate(
  dateParam: number | string | Date,
  language: string,
  formatType: string
) {
  let date: Date;
  let locale;
  let options;

  if (typeof dateParam === 'number') date = new Date(dateParam * 1000);
  else if (typeof dateParam === 'string') date = new Date(dateParam);
  else date = dateParam;

  if (language === 'en') locale = 'en-US';
  else locale = 'pt-BR';

  switch (formatType) {
    case 'wmdhm':
      options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: locale === 'en-US' ? true : false,
      };
      break;
    case 'wd':
      options = {
        weekday: 'long',
        day: 'numeric',
      };
      break;
    case 'w':
      options = {
        weekday: 'short',
      };
      break;
    case 'hm':
      options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: locale === 'en-US' ? true : false,
      };
      break;
    case 'md':
      options = {
        month: 'long',
        day: 'numeric',
      };
      break;
  }

  return new Intl.DateTimeFormat(locale, options).format(date);
}
