export default {
  timeGoalCreated(state){
    return state.timeGoalCreated;
  },
  salary(state){
    return state.salary;
  },
  history(state){
    return state.history;
  },
  colorToday(state){
    return state.colorToday;
  },
  colorYesterday(state){
    return state.colorYesterday;
  },
  colorGapYesterday(state){
    return state.colorGapYesterday;
  },
  showCart(state){
    return state.showCart;
  },
  colorMark(state){
    return state.colorMark;
  },
  tempMessage(state){
    return `remained roughly ${state.temp} days`;
  },
  showMark(state){
    return state.showMark;
  },
  moneyBoxBar(state){
    return state.moneyboxBar;
  },
  spent(state){
    return state.spent;
  },
  goalAdded(state){
    return state.goalAdded;
  },
  BAG(state){
    return state.BAG;
  },
  lastJoinDate(state){
    return state.lastJoinDate;
  },
  yStopTime(state){
    return state.yStopTime;
  },
  startTodayCash(state){
    return state.startTodayCash;
  },
  monthDebt(state){
    return state.monthDebt;
  },
  goalAmount(state){
    return state.goalAmount;
  },
  tempThreeDays(state){
    return state.tempThreeDays;
  },







    messageYesterday(state){
      return state.messageYesterday;
    },
    messsageMark(state){
      return state.messsageMark;
    },
    messageMark(state){
      return state.messageMark;
    },

    todayCash(state){
      return state.todayCash;
    },
    yesterdayCash(state){
      // локаст;
    },
    goalName(state){
      return state.goalName;
    },
    colors(state){
      return state.colors;
    },
    icons(state){
      return state.icons;
    },
    categories(state){
      return Object.keys(state.spent);
    },
    colorsLeftMenu(state){
      return Object.values(state.colors).slice(0, Object.values(state.colors).length/2);
    },
    colorsRightMenu(state){
      return Object.values(state.colors).slice(Object.values(state.colors).length/2);
    },

    todayDateHeader(){
      let m = new Date();
      return `${m.getDate()}.${m.getMonth() + 1}.${m.getUTCFullYear()}`;
    }
}

