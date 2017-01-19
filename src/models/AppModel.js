import {routerRedux} from "dva/router";

export default {
  namespace: "AppModel",
  state: {
    login: false,
    rememberMe: false,
    loginSuccessPath: "",
    username: "",
    showSider: true,
    siderFolded: false,
  },
  reducers: {
    login(state, action) {
      return {
        ...state,
        login: action.payload.status,
        username: action.payload.username,
      };
    },
    rememberMe(state, action) {
      return {
        ...state,
        rememberMe: action.payload
      }
    },
    loginSuccessPath(state, action) {
      return {
        ...state,
        loginSuccessPath: action.payload
      }
    },
    switchSider(state, action) {
      return {
        ...state,
        showSider: !state.showSider
      }
    },
    foldSider(state) {
      return {
        ...state,
        siderFolded: !state.siderFolded
      }
    }
  },
  effects: {
    *pathChanged({payload}, {select, put}) {
      const state = yield select();
      console.log(`login: ${state.AppModel.login}`);
      if (state.AppModel.login === false) {
        console.log(`will redirect to /login`);
        yield put({type: "loginSuccessPath", payload: payload});
        yield put({type: "redirect", payload: "/login"});
      }
    },
    *loginSuccess({payload}, {put, select}) {
      const state = yield select();
      yield put({type: "login", payload: {status: true, username: payload}});
      yield put({type: "redirect", payload: state.AppModel.loginSuccessPath})
    },
    *redirect({payload}, {put}) {
      console.log(`redirecting to ${payload}`);
      yield put(routerRedux.push({pathname: payload}))
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        console.log(`entering path: ${pathname}`);
        if (["/login", "/register"].indexOf(pathname)) {
          dispatch({type: "pathChanged", payload: pathname})
        } else {
          console.log(`entered /login or /register, login is invalided`);
          dispatch({type: "login", payload: false});
          dispatch({type: "loginSuccessPath", payload: "/"})
        }
      })
    }
  },
};
