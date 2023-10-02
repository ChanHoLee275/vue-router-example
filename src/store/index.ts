import Vue from 'vue'
import Vuex, {ActionContext} from 'vuex'

export interface ModalStateType {
  isShow: boolean;
  type: string;
}

export interface UserStateType {
  accessLevel: number;
}

export interface StateType {
  modalState: ModalStateType;
  userState: UserStateType;
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   modalState : {
    isShow: false,
    type: 'default'
   }, userState: {
    accessLevel: 2,
   }
  },
  getters: {
    currentShowState(state){
      return state.modalState.isShow;
    },
    currentTypeState(state){
      return state.modalState.type;
    },
    currentUserAccessLevelState(state){
      return state.userState.accessLevel;
    }
  },
  mutations: {
    updateShowState(state, isShow: boolean) {
      state.modalState.isShow = isShow;
    },
    updateTypeState(state, type:string){
      state.modalState.type = type;
    },
    updateUserState(state, accessLevel:number){
      state.userState.accessLevel = accessLevel;
    }
  },
  actions: {
    updateShowState(ctx: ActionContext<StateType,StateType>, payload: ModalStateType){
      ctx.commit("updateShowState", payload.isShow);
    },
    updateTypeState(ctx: ActionContext<StateType,StateType>, payload: ModalStateType){
      ctx.commit("updateTypeState", payload.type);
    },
    updateUserState(ctx: ActionContext<StateType,StateType>, payload: UserStateType){
      ctx.commit("updateUserState", payload.accessLevel);
    }
  },
  modules: {
  }
})
