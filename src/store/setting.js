import config from "./../config"
import axios from "axios"
import i18n from "./../i18n"

export default {
    namespaced: true,
    state: {
        provinces: [],
        loadingProvince: false,
        loadingSchool: false,
        schools: [],
        isHide: false,
        localize: localStorage.getItem('localize') ? localStorage.getItem('localize') : "en",
        page: 1,
        darkMode: false,
        feedWidth: 600,
        className: "flex items-center justify-center fixed left-0 top-0 z-50 bg-black bg-opacity-80 w-full h-full"
    },
    mutations: {
        setFeedWidth(state, payload) {
            state.feedWidth = payload
        },
        setDarkMode(state, payload) {
            state.darkMode = payload
            localStorage.setItem("darkMode", payload)
        },
        setPagination(state, payload) {
            state.page = payload
        },
        toggleSidebar(state, status) {
            state.isHide = status
        },
        setLocalize(state, localize) {
            localStorage.setItem('localize', localize)
            state.localize = localize
            i18n.locale = localize

        },
        gettingProvince(state, status) {
            state.loadingProvince = status
        },

        getAllProvince(state, province) {
            state.provinces = province
        },
        gettingSchool(state, status) {
            state.loadingSchool = status
        },
        getAllSchool(state, school) {
            state.schools = school
        },
    },
    actions: {
        getProvinces({commit}) {
            if (localStorage.getItem('provinces')) {
                commit("getAllProvince", JSON.parse(localStorage.getItem('provinces')))
            } else {
                commit("gettingProvince", true)
                return new Promise((resolve, reject) => {
                    axios.get(config.apiUrl + 'province').then(response => {
                        resolve(response)
                        commit("gettingProvince", false)
                        commit("getAllProvince", response.data.data)
                        localStorage.setItem('provinces', JSON.stringify(response.data.data))

                    }).catch(err => {
                        commit("gettingProvince", false)
                        reject(err)
                    })
                })
            }
        },
        getSchool({commit}, province_id) {
            commit("gettingSchool", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `province/school?province_id=${province_id}`).then(response => {
                    setTimeout(() => {
                        commit("gettingSchool", false)
                    }, 1000)
                    commit("getAllSchool", response.data.data)
                    resolve(response.data)
                }).catch(err => {
                    commit("gettingSchool", false)
                    reject(err)
                })
            })
        },
        companyInfo() {
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + 'company/about').then(response => {
                    resolve(response.data.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        checkForUpdate() {
            return new Promise((resolve, reject) => {
                axios.get(config.checkingVersionUrl + `update`).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}