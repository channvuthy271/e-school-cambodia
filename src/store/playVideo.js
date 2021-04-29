import axios from "axios";
import config from "./../config";
export default {
    namespaced: true,
    state: {
        videoUrl: "",
        defaultVolumeRange: 100,
        stopWatch: false,
        videoPlay: "",
        lastWatched: 0,

    },

    mutations: {
        setLastWatched(state, payload) {
            state.lastWatched = payload
        },
        setDefaultVolumeRange(state, payload) {
            state.defaultVolumeRange = payload
        },
        getVideoUrl(state, payload) {
            state.videoUrl = payload
        },
        stopWatch(state, payload) {
            state.stopWatch = payload
        },
        playVideo(state, payload) {
            state.videoPlay = payload
        }
    },

    actions: {
        stopWatch({
            commit
        }, payload) {
            let qs = Object.keys(payload)
                .map(key => `${key}=${payload[key]}`)
                .join('&');
            axios.get(config.apiUrl + `video/stop?${qs}`).then(() => {
                commit("stopWatch", true)
            })
        },
        playVideo({
            commit
        }, payload) {
            axios.get(config.apiUrl + `video/play?id=${payload}`).then(() => {
                commit("playVideo", payload)
            })
        }
    }
}