import { createStore } from 'vuex'

import axios from 'axios';
let Axios = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
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
    Axios.defaults.headers.common['Authorization'] = `Baerer ${user.token}`;
  } catch (ex) {
    user = {
      userId: -1,
      token: '',
    };
  }
}

// Create a new store Axios
const store = createStore({
  state: {
    status: '',
    user: user,
    data: {
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
      Axios.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    data (state, data) {
      state.data = data;
    },
  },
  actions: {
    // Connexion 
    login: ({commit}, data) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        Axios.post('/login', data)
        .then(function (response) {
          commit('setStatus', 'login');
          commit('logUser', response.data);
          resolve(response);
          alert("Utilisateur connecté");
        })
        .catch(function (error) {
          commit('setStatus', 'error_login');
          reject(error);
          alert("Email et/ou mot de passe incorect");
        });
      });
    },
    // Création de compte
    signup: ({commit}, data) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        commit;
        Axios.post('/signup', data)
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