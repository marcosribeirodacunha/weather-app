/* *************************************************** */
// 200
/* *************************************************** */
import lightrainandthunder from './lightrainandthunder.svg';
import rainandthunder from './rainandthunder.svg';
import heavyrainandthunder from './heavyrainandthunder.svg';

import lightrainshowersandthunder_day from './lightrainshowersandthunder_day.svg';
import lightrainshowersandthunder_night from './lightrainshowersandthunder_night.svg';

import rainshowersandthunder_day from './rainshowersandthunder_day.svg';
import rainshowersandthunder_night from './rainshowersandthunder_night.svg';

import heavyrainshowersandthunder_day from './heavyrainshowersandthunder_day.svg';
import heavyrainshowersandthunder_night from './heavyrainshowersandthunder_night.svg';

/* *************************************************** */
// 500 AND 300
/* *************************************************** */
import lightrainshowers_day from './lightrainshowers_day.svg';
import lightrainshowers_night from './lightrainshowers_night.svg';

import rainshowers_day from './rainshowers_day.svg';
import rainshowers_night from './rainshowers_night.svg';

import heavyrainshowers_day from './heavyrainshowers_day.svg';
import heavyrainshowers_night from './heavyrainshowers_night.svg';

import lightrain from './lightrain.svg';
import rain from './rain.svg';
import heavyrain from './heavyrain.svg';

/* *************************************************** */
// 600
/* *************************************************** */
import lightsnow from './lightsnow.svg';
import snow from './snow.svg';
import heavysnow from './heavysnow.svg';

import sleet from './sleet.svg';

import lightsleetshowers_day from './lightsleetshowers_day.svg';
import lightsleetshowers_night from './lightsleetshowers_night.svg';

import sleetshowers_day from './sleetshowers_day.svg';
import sleetshowers_night from './sleetshowers_night.svg';

import lightsnowshowers_day from './lightsnowshowers_day.svg';
import lightsnowshowers_night from './lightsnowshowers_night.svg';

import snowshowers_day from './snowshowers_day.svg';
import snowshowers_night from './snowshowers_night.svg';

import heavysnowshowers_day from './heavysnowshowers_day.svg';
import heavysnowshowers_night from './heavysnowshowers_night.svg';

/* *************************************************** */
// 700
/* *************************************************** */
import fog from './fog.svg';

/* *************************************************** */
// 800
/* *************************************************** */
import clearsky_day from './clearsky_day.svg';
import clearsky_night from './clearsky_night.svg';

import fair_day from './fair_day.svg';
import fair_night from './fair_night.svg';

import partlycloudy_day from './partlycloudy_day.svg';
import partlycloudy_night from './partlycloudy_night.svg';

import cloudy from './cloudy.svg';

/* ***************************************************************** */

interface IWeatherIcon {
  [index: string]: any;
}

export const wi: IWeatherIcon = {
  /* ********************************************************** */
  // 200 DAY
  '200-11d': lightrainshowersandthunder_day,
  '201-11d': rainshowersandthunder_day,
  '202-11d': heavyrainshowersandthunder_day,
  '210-11d': lightrainandthunder,
  '211-11d': rainandthunder,
  '212-11d': heavyrainandthunder,
  '221-11d': rainandthunder,
  '230-11d': lightrainandthunder,
  '231-11d': rainandthunder,
  '232-11d': heavyrainandthunder,

  //  200 NIGHT
  '200-11n': lightrainshowersandthunder_night,
  '201-11n': rainshowersandthunder_night,
  '202-11n': heavyrainshowersandthunder_night,
  '210-11n': lightrainandthunder,
  '211-11n': rainandthunder,
  '212-11n': heavyrainandthunder,
  '221-11n': rainandthunder,
  '230-11n': lightrainandthunder,
  '231-11n': rainandthunder,
  '232-11n': heavyrainandthunder,

  /* ********************************************************** */
  // 300 DAY
  '300-09d': lightrain,
  '301-09d': rain,
  '302-09d': heavyrain,
  '310-09d': lightrain,
  '311-09d': rain,
  '312-09d': heavyrain,
  '313-09d': lightrain,
  '314-09d': rain,
  '321-09d': heavyrain,

  //  300 NIGHT
  '300-09n': lightrain,
  '301-09n': rain,
  '302-09n': heavyrain,
  '310-09n': lightrain,
  '311-09n': rain,
  '312-09n': heavyrain,
  '313-09n': lightrain,
  '314-09n': rain,
  '321-09n': heavyrain,

  /* ********************************************************** */
  // 500 DAY
  '500-10d': lightrainshowers_day,
  '501-10d': lightrainshowers_day,
  '502-10d': rainshowers_day,
  '503-10d': heavyrainshowers_day,
  '504-10d': heavyrainshowers_day,
  '511-13d': sleet,
  '520-09d': lightrain,
  '521-09d': rain,
  '522-09d': heavyrain,
  '531-09d': rain,

  //  500 NIGHT
  '500-10n': lightrainshowers_night,
  '501-10n': lightrainshowers_night,
  '502-10n': rainshowers_night,
  '503-10n': heavyrainshowers_night,
  '504-10n': heavyrainshowers_night,
  '511-13n': sleet,
  '520-09n': lightrain,
  '521-09n': rain,
  '522-09n': heavyrain,
  '531-09n': rain,

  /* ********************************************************** */
  // 600 DAY
  '600-13d': lightsnow,
  '601-13d': snow,
  '602-13d': heavysnow,
  '611-13d': sleet,
  '612-13d': lightsleetshowers_day,
  '613-13d': sleetshowers_day,
  '615-13d': lightsnow,
  '616-13d': snow,
  '620-13d': lightsnowshowers_day,
  '621-13d': snowshowers_day,
  '622-13d': heavysnowshowers_day,

  //  600 NIGHT
  '600-13n': lightsnow,
  '601-13n': snow,
  '602-13n': heavysnow,
  '611-13n': sleet,
  '612-13n': lightsleetshowers_night,
  '613-13n': sleetshowers_night,
  '615-13n': lightsnow,
  '616-13n': snow,
  '620-13n': lightsnowshowers_night,
  '621-13n': snowshowers_night,
  '622-13n': heavysnowshowers_night,

  /* ********************************************************** */
  // 700 DAY
  '701-50d': fog,
  '711-50d': fog,
  '721-50d': fog,
  '731-50d': fog,
  '741-50d': fog,
  '751-50d': fog,
  '761-50d': fog,
  '762-50d': fog,
  '771-50d': fog,
  '781-50d': fog,

  //  700 NIGHT
  '701-50n': fog,
  '711-50n': fog,
  '721-50n': fog,
  '731-50n': fog,
  '741-50n': fog,
  '751-50n': fog,
  '761-50n': fog,
  '762-50n': fog,
  '771-50n': fog,
  '781-50n': fog,

  /* ********************************************************** */
  // 800 DAY
  '800-01d': clearsky_day,
  '801-02d': fair_day,
  '802-03d': partlycloudy_day,
  '803-04d': cloudy,
  '804-04d': cloudy,

  //  800 NIGHT
  '800-01n': clearsky_night,
  '801-02n': fair_night,
  '802-03n': partlycloudy_night,
  '803-04n': cloudy,
  '804-04n': cloudy,
};

/* ***************************************************************** */

export function getWeatherIcon(id: number, icon: string) {
  const key = `${id}-${icon}`;
  return wi[key];
}

export default wi;

// ----------------------------------------------------------------------------x
// ----------------------------------------------------------------------------x

// TO USE THAT ICONS BASED JUST ON ICON FIELD IN API RESPONSE USE THESE IMPORTS

// ----------------------------------------------------------------------------x
// ----------------------------------------------------------------------------x

/* // 01
import clearsky_day from './clearsky_day.svg';
import clearsky_night from './clearsky_night.svg';

// 02
import fair_day from './fair_day.svg';
import fair_night from './fair_night.svg';

// 03
import partlycloudy_day from './partlycloudy_day.svg';
import partlycloudy_night from './partlycloudy_night.svg';

// 04
import cloudy from './cloudy.svg';

// 09
import rain from './rain.svg';

// 10
import rainshowers_day from './rainshowers_day.svg';
import rainshowers_night from './rainshowers_night.svg';

// 11
import rainandthunder from './rainandthunder.svg';

// 13
import snow from './snow.svg';

// 50
import fog from './fog.svg'; */

// export default {
//   '01d': clearsky_day,
//   '01n': clearsky_night,

//   '02d': fair_day,
//   '02n': fair_night,

//   '03d': partlycloudy_day,
//   '03n': partlycloudy_night,

//   '04d': cloudy,
//   '04n': cloudy,

//   '09d': rain,
//   '09n': rain,

//   '10d': rainshowers_day,
//   '10n': rainshowers_night,

//   '11d': rainandthunder,
//   '11n': rainandthunder,

//   '13d': snow,
//   '13n': snow,

//   '50d': fog,
//   '50n': fog,
// };
