// 使用this.$store.commit("方法名",变量)
export default {
  /**
   * 设置维度
   * @param state
   * @param val
   */
  setLatitude(state, val) {
    state.latitude = val;
  },
  setLongitude(state, val) {
    state.longitude = val;
  },
  /**
   * 设置地址
   * @param state
   * @param val
   */
  setAddresses(state, val) {
    state.addresses = val;
    try {
      localStorage.addresses = val;
    } catch (e) {
    }
  }
}
