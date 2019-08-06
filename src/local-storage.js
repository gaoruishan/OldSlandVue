class LocalStorage {
  // 分割符号
  static _SUB = ",";

  /**
   * 获取历史记录
   * @returns {*}
   */
  getHistoryList() {
    try {
      let list = [];
      let history = localStorage.history;
      if (!history) {
        return list;
      }
      if (history.indexOf(LocalStorage._SUB) !== -1) {
        return history.split(LocalStorage._SUB);
      } else {
        list.push(history);
        return list;
      }
    } catch (e) {
    }
  }

  /**
   * 添加记录
   * @param val
   */
  addHistory(val) {
    let list = this.getHistoryList();
    if (list && list.indexOf(val) === -1) {
      list.unshift(val);
      localStorage.history = list.join(LocalStorage._SUB);
    }
  }

}

export default LocalStorage = new LocalStorage();

