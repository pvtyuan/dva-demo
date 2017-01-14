import {login} from "../services/UserService";
import delay from "../utils/delay";
import {message} from "antd";

export default {
  namespace: 'LoginModel',
  state: {
    loading: false,
    failed: false,
  },
  reducers: {
    loading(state, action) {
      return {
        ...state,
        loading: action.payload
      }
    },
    failed(state, action) {
      return {
        ...state,
        failed: true
      }
    }
  },
  effects: {
    *doLogin({payload}, {call, put}) {
      console.log(`processing login`);
      yield put({type: "loading", payload: true});
      let resp = yield call(login, payload);
      yield put({type: "loading", payload: false});
      if (resp.data.errno === 0) {
        yield put({type: "AppModel/loginSuccess", payload: payload.username})
      } else {
        yield put({type: "failed"});
        yield call(message.error, "login failed, try again", 5);
      }
    },
  },
  subscriptions: {},
};
