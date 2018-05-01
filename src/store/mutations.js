export default {
  setJoin(state, date){
    state.lastJoinDate = date;
  },
  goalInit(state, data){
    state.goalName = data.goalName;
    state.goalAmount = data.goalAmount;
    state.salary = data.salary;
    state.StartInvest = data.StartInvest;
    state.timeGoalCreated = data.timeGoalCreated;
    state.goalAdded = true;
  },
  bagAddPercents(state){
    state.BAG += state.salary * state.StartInvest * 0.01;
  },
  addBag(state, data){
    state.BAG += data;
  },
  initMonthDebt(state){
    state.monthDebt = 0;
  },
  setTodayCash(state, todayCash){
    state.todayCash = todayCash;
  },
  setYStopTime(state, data){
    state.yStopTime = data;
  },
  updateMoneyBar(state){
    state.moneyboxBar = state.BAG / state.goalAmount * 100;
  },
  setMessageYesterday(state, message){
    state.messageYesterday = message;
  },
  setMessageMark(state, message){
    state.messageMark = message;
  },
  addDebt(state, data){
    state.monthDebt -= data;
  },
  addSpentToCategory(state, data){
    state.spent[data.item] += Number(data.amount);
    state.todayCash -= data.amount;
    if((state.todayCash / state.startTodayCash) < 0.5){
      state.colorToday = {background : 'radial-gradient(#ffbd57, #fffc18)'};
    }
    if(state.todayCash < 0){
      state.colorToday = {background : 'radial-gradient(#ff7d18, orangered)'};
    }
  },
  setStartTodayCash(state, data){
    state.startTodayCash = data;
  },
  setYesterdayCash(state, data){
    state.YesterdayCash = data;
  },
  openMark(state){
    state.showMark = true;
  },
  closeMark(state){
    state.showMark = false;
  },
  setColorMark(state, color){
    state.colorMark = color;
  },
  setTemp(state, temp){
    state.temp = temp;
  },
  setTempThreeDays(state, data){
    state.setTempThreeDays = data;
  },
  cartInit(state){
    state.showCart = true;
  },
  setCountDays(state, data){
    state.countDays = data;
  },
  initColorToday(state){
    state.colorToday = {background: 'radial-gradient(white, #0aff03)'};
  },
  initColorYesterday(state, yesterdayCash){
    if(state.countDays < 2){
      state.colorYesterday = {'border-bottom': '4vh solid #63ff35'};
    } else {
      if(yesterdayCash < 0){
        state.colorYesterday = {'border-bottom': '4vh solid rgb(255,94,94)'};  // красный
      } else {
        if((yesterdayCash / state.startTodayCash) < 0.5){
          state.colorYesterday = {'border-bottom': '4vh solid rgb(252,149,59)'}; // желтый
        } else {
          state.colorYesterday = {'border-bottom': '4vh solid #63ff35'};
        }
        //
      }
    }
    state.colorGapYesterday = {background: `linear-gradient(#9dadb9 , ${state.colorYesterday['border-bottom'].split(' ')[2]})`};
  },
  addComment(state, data){
    state.history.push(data);
  },
  addMoneyToToday(state, data){
    if(state.todayCash > data.amount){
      state.todayCash -= data.amount;
    }
    else {
      let minusCash = data.amount - state.todayCash;
      state.todayCash = 0;
      state.moneybox -= minusCash;
    }
  },
  addMoney(state, data){
    state.spent[data.item] += Number(data.amount);
  },
  addComment(state, data){
    state.history.push(data);
  },
  progress(state, progress) {
    state.moneyboxBar = progress;
  },
  finishGoal(state) {
    state.goalFinished = true;
  },
  newGoal(state) {
    state.goalAdded = false;
  }
}
