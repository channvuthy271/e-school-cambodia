import axios from "axios"
import config from "./../config"
import err from "./../helper/err"
import helper from "./../helper/helper"

export default {
    namespaced: true,
    state: {
        forums: [],
        loadingForum: false,
        loadingForumPagination: false,
        loadingAdd: false,
        comments: [],
        loadingComment: false,
        addingComment: false,

    },
    mutations: {
        showCommentPagination() {

        },
        addingComment(state, status) {
            state.addingComment = status
        },
        gettingCommentReply(state, comment) {
            state.comments.unshift(comment)
        },
        gettingComment(state, comments) {
            state.comments = comments
        },
        addComment(state, payload) {
            state.forums.push(payload)
        },
        gettingCommentPagination(state, comment) {
            if (comment && comment.length) {
                for (let index = 0; index < comment.length; index++) {
                    state.comments.push(comment[index])
                }
            }
        },
        showingComment(state, status) {
            state.loadingComment = status
        },
        addForm(state, forum) {
            state.forums.unshift(forum)
        },
        addingForum(state, status) {
            state.loadingAdd = status
        },
        loadingForum(state, status) {
            state.loadingForum = status
        },
        gettingForum(state, forums) {
            state.forums = forums
        },
        loadingForumPagination(state, status) {
            state.loadingForumPagination = status
        },
        gettingForumPagination(state, forums) {
            for (let i = 0; i < forums.length; i++) {
                state.forums.push(forums[i])
            }
        }
    },
    actions: {
        getForum({commit}, params) {
            commit("loadingForum", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `forum?${helper.q(params)}`).then(response => {
                    if (response.data.status && response.data.status === 2) {
                        helper.errorMessage(response.data.msg)
                    }
                    commit("loadingForum", false)
                    commit("gettingForum", response.data.data)
                    resolve(response)
                }).catch(err => {
                    commit("loadingForum", false)
                    reject(err)
                })
            })
        },
        getCommentForum({commit}, params = "") {
            commit("loadingForum", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `forum/comment?${helper.q(params)}`).then(response => {
                    if (response.data.status && response.data.status === 2) {
                        helper.errorMessage(response.data.msg)
                    }
                    resolve(response.data.data)
                    commit("loadingForum", false)
                }).catch(err => {
                    commit("loadingForum", false)
                    reject(err)
                })
            })
        },

        addForum({commit}, data) {
            commit("addingForum", true)
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + 'forum/add', data).then(response => {

                    if (response.data.status && response.data.status === 2) {
                        err.err(response.data.msg)
                    }

                    commit("addingForum", false)
                    commit("addForm", response.data.data)
                    resolve(response.data.data)
                }).catch(err => {
                    commit("addingForum", false)
                    reject(err)
                })
            })
        },
        getForumPagination({commit}, params) {
            commit("loadingForumPagination", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `forum?${helper.q(params)}`).then(response => {
                    if (response.data.status && response.data.status === 2) {
                        err.err(response.data.msg)
                    }

                    commit("loadingForumPagination", false)
                    commit("gettingForumPagination", response.data.data)
                    resolve(response)
                }).catch(err => {
                    commit("loadingForumPagination", false)
                    reject(err)
                })
            })
        },
        showComment({commit}, params) {
            commit("showingComment", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + "forum/comment?forum_id=" + params.forum_id + "&p=" + params.p).then(response => {

                    if (response.data.status && response.data.status === 2) {
                        err.err(response.data.msg)
                    }

                    commit("showingComment", false)
                    commit("gettingComment", response.data.data.comment)
                    resolve(response.data.data)
                }).catch(err => {
                    commit("showingComment", false)
                    reject(err)
                })
            })
        },
        showCommentPagination({commit}, params) {
            commit("showCommentPagination", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `forum/comment?${helper.q(params)}`).then(response => {
                    if (response.data.status && response.data.status === 2) {
                        err.err(response.data.msg)
                    }
                    resolve(response.data.data)
                    commit("showCommentPagination", false)
                }).catch(err => {
                    commit("showCommentPagination", false)
                    reject(err)
                })
            })
        },
        addComment({commit}, params) {
            commit("addingComment", true)
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + `forum`, params).then(response => {

                    if (response.data.status && response.data.status === 2) {
                        err.err(response.data.msg)
                    }

                    commit("addingComment", false)
                    commit("addComment", response.data.data)
                    resolve(response.data.data)
                }).catch(err => {
                    commit("addingComment", false)
                    reject(err)
                })
            })
        },
        replyComment({commit}, payload) {
            commit("addingComment", false)
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + 'forum/comment', payload).then(response => {
                    resolve(response)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}