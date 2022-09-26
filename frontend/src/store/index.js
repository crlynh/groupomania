import { createStore } from 'vuex'

import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:3000/api/users'
})

let user = localStorage.getItem('user');
if (!user) {
user = {
    userId: -1,
    token: '',
  }; 
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userId: -1,
      token: '',
    };
  }
}

// Create a new store instance.
const store = createStore({
  state: {
    status: '',
    user: user,
    userInfos: {
      nom:'',
      prenom: '',
      email: '',
    },
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    userInfos (state, userInfos) {
      state.userInfos = userInfos;
    },
    // logout (state) {
    //   state.user = {
    //     userId: -1,
    //     token: '',
    //   }
    //   localStorage.removeItem('user');
    // }
  },
  actions: {
    // Connexion 
    login: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('/login', userInfos)
        .then(function (response) {
          commit('setStatus', 'login');
          commit('logUser', response.data);
          resolve(response);
          alert("Utilisateur connecté");
        })
        .catch(function (error) {
          commit('setStatus', 'error_login');
          reject(error);
          alert("Echec de la connexion");
        });
      });
    },
    // Création de compte
    signup: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        commit;
        instance.post('/signup', userInfos, {
          headers:
          {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function (response) {
          commit('setStatus', 'created');
          resolve(response);
          alert("Votre compte a bien été crée, vous pouvez désormais vous connecter");
        })
        .catch(function (error) {
          commit('setStatus', 'error_create');
          reject(error);
          alert("Echec de la création de compte");
        });
      });
    },
  }
})

export default store;