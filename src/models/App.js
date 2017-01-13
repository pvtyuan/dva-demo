export default {
  namespace: "App",
  state: {
    login: false,
    loginLoading: false,
  },
  reducers: {
    // login(state,action) {
    //   return {
    //     ...state,
    //     spining: !state.spining,
    //   };
    // },
    showLogin(state) {
      return {
        ...state,
        login: false
      }
    }
  },
  effects: {
    *login({payload}, {call, put}) {
      console.log("login...");
    }
  },
  subscriptions: {
    setup({ dispatch, history}) {
      history.listen(({pathname}) => {
        if (pathname !== "/login") {
          dispatch({type: "showLogin"})
        }
      })
    }
  },
};
