export default
{
  goalInit(store, data){

    let d = new Date();
    store.commit('goalInit', {
      ...data,
      timeGoalCreated: d
    });

    localStorage.setItem('state', JSON.stringify(store.state));

  },

  newMonthInit(store){
    let currentMonth = new Date().getMonth();
    let salary = store.getters.salary;
    let currentMonthDays = store.state.daysInMonths[currentMonth];
    let startTodayCash = Math.ceil(( salary - salary * store.state.StartInvest * 0.01) / currentMonthDays);
    store.commit('setStartTodayCash', startTodayCash);
    store.commit('bagAddPercents');
    store.commit('initMonthDebt');


    localStorage.setItem('state', JSON.stringify(store.state));
    //  здесь инициализирую начальный запас денег на день


  },

  newDayInit(store) {
      let yesterdayCash = store.getters.yStopTime;

      let yesterdayStart = new Date(new Date(new Date() - 24 * 3600 * 1000).setHours(0, 0, 0, 0)).getTime();
      let yesterdayFinish = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
      let dateComment = 0;
      let comments = store.getters.history;

      for (let i = 0; i < comments.length; i++) {

        dateComment = new Date(comments[i].date).getTime();

        if (dateComment > yesterdayStart && dateComment < yesterdayFinish) {
          yesterdayCash -= Number(comments[i].amount);
        }
      }
      // yesterday есть
      if(yesterdayCash < 0){
        store.commit('addDebt', yesterdayCash);
      }
      // 1.1 долг добавлен

      store.commit('addBag', yesterdayCash);
      // 2 bag есть
      let startTodayCash = store.getters.startTodayCash;
      let monthDebt = store.getters.monthDebt;

      let currentDate = new Date();
      let currentMonth = currentDate.getMonth();
      let letDays = store.state.daysInMonths[currentMonth] - currentDate.getDate() + 1;

      let todayCash = startTodayCash - monthDebt / letDays;
      store.commit('setTodayCash', todayCash);
      // 3) есть деньги на день
      store.commit('setYStopTime', todayCash);
      // 4) есть стоп время
      store.commit('updateMoneyBar');
      // 5) есть полоска денег
      let todayTime = currentDate.getTime();
      let countDays = Math.ceil((todayTime - new Date(new Date(store.getters.timeGoalCreated).setHours(0, 0, 0, 0)).getTime()) / (1000 * 3600 * 24));
      store.commit('setCountDays', countDays);
      if(countDays > 1){
        let messageYesterday = yesterdayCash > 0 ? `yesterday you approached your goal for ${yesterdayCash} rubles` :
          `yesterday you gave up your goal for ${-yesterdayCash} rubles`;
        store.commit('setMessageYesterday', messageYesterday);
      } else{
        store.commit('setMessageYesterday', 'tomorrow you will see how much you saved today ;)');
      }

      // 6) есть сообщение естедей

      let temp = Math.floor(store.getters.goalAmount / store.getters.salary * 30);
      store.commit('setTemp', temp);
      let goalAmount = store.getters.goalAmount;

      let tempThreeDays = store.getters.tempThreeDays;
      tempThreeDays[1] = tempThreeDays[2];
      tempThreeDays[2] = tempThreeDays[3];
      tempThreeDays[3] = Math.floor(goalAmount / yesterdayCash);
      store.commit('setTempThreeDays', tempThreeDays);
      let threeDaysOverage = Math.ceil((tempThreeDays[1] + tempThreeDays[2] + tempThreeDays[3]) / 3);
      let messageMark = '';

      if (countDays > 3) {
        if (temp >= threeDaysOverage) {
          if (((temp - threeDaysOverage) / temp > 0.2) &&
            tempThreeDays[1] >= tempThreeDays[2] && tempThreeDays[2] >= tempThreeDays[3]) {

            store.commit('openMark');

            messageMark = `Over the past 3 days,` +
                `you have gained a good pace in the economy,` +
                ` if you save it, you can achieve your goal for ${temp - threeDaysOverage} days earlier`;
            store.commit('setColorMark', {'background-color': 'rgb(138, 244, 97)'});
            store.commit('setMessageMark', messageMark);
          } else {
            store.commit('closeMark');
          }
        } else {
          if ((threeDaysOverage - temp) / temp > 0.2) {
            store.commit('openMark');

            messageMark = `Last 3 days were you not the best in terms of cost` +
            `if you continue the same spending money,` +
            `the targets you will reach on ${threeDaysOverage - temp} days later than the current tempane`;

            store.commit('setColorMark', {'background-color': 'rgb(255,94,94)'});
            store.commit('setMessageMark', messageMark);
          } else {
            store.commit('closeMark');
          }
        }
      }  // формирование марк мессдж и цвета


      store.commit('initColorToday');
      store.commit('initColorYesterday', yesterdayCash);


    },

  addComment(store, data) {
      if(!store.getters.showCart){
        store.commit('cartInit');
      }
      // добавление расходов
      store.commit('addSpentToCategory', {
        amount : data.amount,
        item: data.item
      });
      //------------------------------------------------------\\
      // добавление комментария
      let d = new Date();

      store.commit('addComment', {
        ...data,
        date: d
      });

      //-----------------------------------------------------------\\
      localStorage.setItem('state', JSON.stringify(store.state));
    },

  finishGoal(store) {
    store.commit('finishGoal');
  },
  newGoal(store) {
    store.commit('newGoal');
    localStorage.clear();
  }
}
