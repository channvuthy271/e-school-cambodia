import axios from "axios"
import config from "./../config"
import err from "./../helper/err"

export default {
    namespaced: true,
    state: {
        help: "",
        loadingHelp: "",
        loadingHelpDetail: false,
        youtube_url: "",

    },
    mutations: {
        receivingYouTube(state, youtube_url) {
            state.youtube_url = youtube_url
        },
        loadingHelp(state, status) {
            state.loadingHelp = status
        },
        receivingHelp(state, other) {
            state.help = other
        },
        gettingHelpDetail(state, status) {
            state.loadingHelpDetail = status
        }
    },

    actions: {
        getHelp({commit}) {
            commit("loadingHelp", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + "company/help").then(response => {

                    if (response.data.status && response.data.status === 2) {
                        err.err(response.data.msg)
                    }


                    commit("loadingHelp", false)
                    commit("receivingHelp", response.data.data)
                    resolve(response)
                }).catch(err => {
                    commit("loadingHelp", false)
                    reject(err)
                })
            })
        }
    },

}