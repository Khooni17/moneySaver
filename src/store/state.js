const initState = JSON.parse(localStorage.getItem('state')) || {
  goalAdded: false,
  goalFinished: false,
  goalName: '',
  messageYesterday: '',
  messageMark: '',
  salary: '',
  goalAmount: '',
  temp: '',
  startTodayCash: '',
  StartInvest: '',
  YesterdayCash: '',
  todayCash: '',
  yesterdayCash: '',
  moneyboxBar: '',
  BAG: 0,
  yStopTime: '',
  monthDebt: 0,
  countDays: '',
  showCart: false,
  timeGoalCreated: '',
  lastJoinDate: '',
  history: [],

  showMark: false,
  colorMark: '',
  colorToday: '',
  colorYesterday: '',
  colorGapYesterday: '',
  spent: {
    products : 0,
    health : 0,
    eatingOut : 0,
    leisure : 0,
    clothers : 0,
    presents : 0,
    transport : 0,
    family: 0
},
  tempThreeDays: {
    1:0,
    2:0,
    3:0
  },
daysInMonths: [31,28,31,30,31,30,31,31,30,31,30,31],


  colors: {
    products: '#ff0000',
    health : '#19FF07',
    eatingOut :'#FF3ED5',
    leisure: '#FF7181',
    clothers: '#FF7D49',
    presents: '#0000FF',
    transport : '#AAFFEB',
    family : '#ffe029'
},
  icons: [
  'fa-shopping-cart',
  'fa-heartbeat',
  'fa-coffee',
  'fa-film',
  'fa-briefcase',
  'fa-gift',
  'fa-bus',
  'fa-child'
],

};

export default initState;
