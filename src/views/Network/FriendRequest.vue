<template>
  <div class="mt-5" :class="darkMode?`text-gray-300`:``">
    <a
        :class="darkMode ? `text-gray-300`: `text-primary`"
        @click="()=>{this.$router.go(-1)}"
        href="#" class="absolute right-2 bottom-2">
      <BackMenuIcon :fill="darkMode?`#ffffff`:`#055174`" :width="30"/>
    </a>
    <div v-if="friendRequest.list && friendRequest.list.length">
      <div v-for="(friend, index) in friendRequest.list" :key="index" class="mb-3">
        <div class="flex justify-between items-center">
          <div class="flex justify-start items-center">
            <div class="h-12 w-12 rounded-full bg-cover bg-white bg-center cursor-pointer"
                 :style="{backgroundImage:`url(${friend.photo})`}" @click="getUser(friend._id)"></div>
            <div class="ml-4 text-sm">
              <div>

                {{ friend.name }}
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center rounded-full">
            <div @click="removeRequest(friend._id)"
                 class="w-10 h-6 rounded-2xl items-center flex justify-center cursor-pointer"
                 :class="darkMode?`bg-button`:`bg-heart`" v-if="!isConfirm(friend)">
              <CloseIcon :fill="darkMode?`#909090`:`#FFFFFF`" :width="20"/>
            </div>
            <div class="w-10 h-6 rounded-2xl items-center flex justify-center ml-5"
                 :class="darkMode?`${isConfirm(friend)?`border border-button`:`bg-button cursor-pointer`}`:`${isConfirm(friend)?`border border-pass`:`bg-pass cursor-pointer`}`"
                 @click="accept(friend)">
              <CheckIcon
                  :fill="darkMode?`#909090`:`${isConfirm(friend)?`#5aa20a`:`#FFFFFF`}`"
                  :width="20"/>
            </div>

          </div>
        </div>
        <div class="border-t mt-3" :class="darkMode?`border-button`:``">

        </div>
      </div>
    </div>
    <div v-else>
      {{ $t('there_is_no_friend_request') }}
    </div>
  </div>
</template>
<script>
import CloseIcon from "./../../components/CloseIcon.vue"
import CheckIcon from "./../../components/AcceptFriendIcon.vue"
import {mapState, mapActions} from "vuex"
import BackMenuIcon from "../../components/BackMenuIcon";

export default {
  props: {
    friendRequest: {
      default: () => {
        return []
      }
    }
  },
  computed: {
    ...mapState('setting', ['darkMode'])
  },
  data() {
    return {
      acceptedFriend: []
    }
  },
  components: {
    BackMenuIcon,
    CloseIcon,
    CheckIcon
  },
  methods: {
    ...mapActions('network', ['acceptFriendRequest', 'removeRequestUser']),
    accept(friend) {
      let payload = {id: friend._id}
      this.acceptFriendRequest(payload).then(() => {
        this.acceptedFriend.push(friend._id)
      })
    },
    getUser(user_id) {
      this.$router.push({name: 'user', params: {user_id}})
    },
    removeRequest(payload) {
      this.removeRequestUser(payload)
    },
    isConfirm(friend) {
      for (let i = 0; i < this.acceptedFriend.length; i++) {
        if (this.acceptedFriend[i] === friend._id) {
          return true
        }
      }
      return false
    },

  }
}
</script>