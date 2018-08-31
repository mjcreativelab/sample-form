const user = {
  namespaced: true,
  state: {
    userData: {
      lastName: '',
      firstName: '',
      lastNameKana: '',
      firstNameKana: '',
      postalCode: '',
      address: ''
    }
  },
  mutations: {
    UPDATE_LAST_NAME (state, value) {
      state.userData.lastName = value;
    },
    UPDATE_FIRST_NAME (state, value) {
      state.userData.firstName = value;
    },
    UPDATE_LAST_NAME_KANA (state, value) {
      state.userData.lastNameKana = value;
    },
    UPDATE_FIRST_NAME_KANA (state, value) {
      state.userData.firstNameKana = value;
    },
    UPDATE_POSTAL_CODE (state, value) {
      state.userData.postalCode = value;
    },
    UPDATE_ADDRESS (state, value) {
      state.userData.address = value;
    },
  },
  actions: {}
}

export default user