import axios from "axios"
import config from "./../config"
import helper from "./../helper/helper"
export default {
    namespaced: true,

    state: {
        loading: false,
        contacts: [],
        messages: [],
        message: {},
        active: 0,
        members: [],
        adminMessage: [],
        sending: false
    },

    mutations:{
        addMessage(state, payload){
            state.messages.push(payload)
        },
        sendingMessage(state, payload){
            state.sending = payload
        },
        getMessage(state, payload){
            state.messages = payload.reverse()
        },
        getMessages(state, payload){
            for(let i = 0; i < payload.length; i ++){
                state.messages.push(payload[i])
            }
        },
        getAdminMessage(state, payload){
          state.adminMessage = payload  
        },
        getAdminMessages(state, payload){
            for(let i = 0; i < payload.length; i ++){
                state.adminMessage.push(payload[i])
            }
        },
        loading(state, payload){
            state.loading = payload
        },
        getContact(state, payload){
            state.contacts = payload
        },
        getContacts(state, payload){
            for(let i = 0; i < payload.length; i ++){
                state.contacts.push(payload[i])
            }
        },
        addMember(state, payload){
            state.members.push(payload)
        },
        removeMember(state, payload){
            const result = state.members.filter(item => item._id != payload.user_id);
            state.members = result
        },
        setActive(state, payload){
            state.active = payload 
        },
        getMember(state, payload){
            state.members = payload
        },
        getPagesMember(state, payload){
            if(payload.length){
                for(let i = 0; i < payload.length; i ++){
                    state.members.push(payload[i])
                }
            }
        }

    },

    actions:{
        getContact({commit}, payload){
            commit("loading", true)
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `etalk/contact?${helper.q(payload)}`).then(response => {
                    resolve(response)
                    if(payload.p === undefined || payload.p === 1){
                        commit("getContact", response.data.data)
                    }else{
                        commit("getContacts", response.data.data)
                    }
                    commit("loading", false)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        getContacts({commit}, payload){
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `etalk/contact?${helper.q(payload)}`).then(response => {
                    resolve(response)
                    commit("getContacts", response.data.data)
                    commit("loading", false)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        createGroup({commit}, form){
            return new Promise((resolve, reject) => {
                var settings = {
                    "url": config.apiUrl + "etalk/group",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        
                    },
                    "processData": false,
                    "mimeType": "multipart/form-data",
                    "contentType": false,
                    "data": form
                };
    
                axios(settings).then(function (response) {
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data)
                });
            })
        },
        renameGroup({}, payload){
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + `etalk/contact/rename`, payload).then(response =>{
                    resolve(response)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        setPhoto({}, payload){
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + `etalk/contact/photo`, payload).then(response =>{
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        muteContact({}, payload){
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + `etalk/contact/mute`, payload).then(response =>{
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        addMember({commit}, payload){
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + `etalk/group/member`, payload).then(response =>{
                    resolve(response)
                    commit("addMember", response.data.data)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        blockUser({}, payload){
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + `etalk/contact/block`, payload).then(response =>{
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        deleteMute({}, payload){
            return new Promise((resolve, reject) => {
                axios.delete(config.apiUrl + `etalk/contact/mute`, {
                    headers:{},
                    data:{
                        id: payload._id
                    }
                }).then(response =>{
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        unblockUser({commit}, data){
            return new Promise((resolve, reject) => {
                axios.delete(config.apiUrl + `etalk/contact/block`, {
                    headers:{},
                    data
                }).then(response =>{
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        deleteMember({commit}, data){
            return new Promise((resolve, reject) => {
                axios.delete(config.apiUrl + `etalk/group/member`, {
                    headers:{},
                    data
                }).then(response =>{
                    resolve(response)
                    if(response.data.msg ===undefined){
                        commit("removeMember", data)
                    }
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        getMember({commit}, payload){
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `etalk/group/member?${helper.q(payload)}`).then(response =>{
                    if(payload.p !== 'undefined' && payload.p > 1){
                        commit("getPagesMember", response.data.data)
                    }else{
                        commit("getMember", response.data.data)
                    }
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response.data.msg)
                })
            })
        },
        getAdminMessage({commit}, payload){
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `etalk/admin/contact?${helper.q(payload)}` ).then(response => {
                    if(payload.p === 1){
                        commit("getAdminMessage", response.data.data)
                    }else{
                        commit("getAdminMessages", response.data.data)
                    }
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response)
                })
            })
        },
        getMessage({commit}, payload){
            return new Promise((resolve, reject) => {
                axios.get(config.apiUrl + `etalk/message?${helper.q(payload)}` ).then(response => {
                    if(payload.p === 1){
                        commit("getMessage", response.data.data)
                    }else{
                        commit("getMessages", response.data.data)
                    }
                    resolve(response)
                }).catch(err => {
                    reject(err)
                    helper.errorMessage(err.response)
                })
            })
        },
        sendMessage({commit}, payload){
            commit("sendingMessage", true)
            return new Promise((resolve, reject) => {
                axios.post(config.apiUrl + `etalk/message`, payload).then(response => {
                    resolve(response)
                    commit("sendingMessage", false)
                    commit("addMessage", response.data.data)
                }).catch(err => {
                    reject(err)
                    commit("sendingMessage", false)
                })
            })
        }

    }
}