export default {
  namespace: "App",
  state: {
    spining: false,
  },
  reducers: {
    spining(state) {
      return {
        ...state,
        spining: !state.spining,
      };
    },
  },
  effects: {},
  subscriptions: {},
};
