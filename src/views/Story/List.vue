<template>
  <div>
    <eHeader :title="'all_story'" :ml="3"/>
    <div class="p-5">
      <div v-if="loadingStory">
        <Loading></Loading>
      </div>
      <div v-else>
        <div class="h-screen pb-40 overflow-y-scroll" @scroll="onScroll">
          <div class="grid gap-5" :class="isHide?`md:grid-cols-6 2xl:grid-cols-8`:`md:grid-cols-5 2xl:grid-cols-6`">
            <div v-for="(st, index) in story" :key="index" class="cursor-pointer relative rounded-xl overflow-hidden"
                 @click="getStoryDetail(st, index)">
              <div
                  class="bg-cover bg-center w-11 h-11 border-3 rounded-full absolute z-40 left-2 top-2 flex justify-center items-center bg-white cursor-pointer"
                  :class="darkMode?`border-fb`:`border-fb`"
                  :style="{backgroundImage:`url(${st.user.photo})`}">
              </div>
              <div class="h-64 w-full bg-cover bg-center"
                   :style="{backgroundImage:`url(${st.photo.url || `/poster.png`})`}"></div>
              <div
                  class="mt-3 whitespace-nowrap absolute bottom-0 left-0 w-full bg-gradient-to-t from-black h-full text-white flex justify-start items-end text-sm p-3"
                  :title="st.user.name">
                <div class="flex items-center justify-between space-x-4 ">
                  <span v-if="(st.type === 51 || st.type === 52)">{{ cutString(st.user.name, 15) }}</span>
                  <span v-else>{{ cutString(st.user.name, 15) }}</span>
                  <span
                      class="text-xs font-black text-center h-5 w-6 rounded"
                      style="padding-top: 2px;"
                      :class="darkMode ? `bg-iconColor` : `bg-forum text-black`"
                      v-if="(st.type === 51 || st.type === 52)">
                <span>AD</span>
              </span>
                </div>
              </div>
            </div>
          </div>
          <!-- Load more button -->
          <template>
            <div class="h-5"></div>
            <div class="text-xs text-center" :class="darkMode?`text-gray-300`:``">{{ $t('scrolling_problem') }}</div>
            <div class="flex items-center justify-center mt-2">
              <button class="focus:outline-none text-xs rounded-full px-2 py-1"
                      :class="darkMode?`bg-pass text-white`:`bg-primary text-white`" @click="loadMore">
                <div class="flex items-center justify-center">
                  <div class="px-14 py-1" v-if="loading">
                    <div class="loader relative -top-6"></div>
                  </div>
                  <span v-else>{{ $t('load_more') }} </span>
                </div>
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <StoryDetail
        v-if="showStory"
        @closeStory="closeStory"/>
    <!-- Post detail -->
    <PostDetail
        @dismiss="()=>{this.isPostDetail = false}"
        :post="postDetail"
        v-if="isPostDetail"/>
    <!-- Video detail -->
    <VideoDetail
        @dismiss="()=>{this.isVideo = false}"
        :post="postDetail"
        v-if="isVideo"
    />
  </div>
</template>
<script>
import eHeader from "./components/eHeader.vue"
import Loading from "./../../components/Loading.vue"
import {mapState, mapActions} from "vuex"
import helper from "./../../helper/helper"
import StoryDetail from "./../Story/StoryDetail.vue"
import VideoDetail from "@/views/Video/components/VideoDetail";
import PostDetail from "@/views/Video/components/PostDetail";

export default {
  components: {
    eHeader,
    Loading,
    StoryDetail,
    VideoDetail,
    PostDetail
  },
  computed: {
    ...mapState('setting', ['localize', 'darkMode', 'isHide']),
    ...mapState('auth', ['token', 'stProfile', 'story'])
  },
  data() {
    return {
      window: {
        width: null
      },
      isPostDetail: false,
      isVideo: false,
      postDetail: {},
      enableScroll: true,
      page: 1,
      showStory: false,
      loadingStory: false,
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', ['getStory', 'viewStory', 'addMyStory']),
    handleResize() {
      this.window.width = window.innerWidth;
    },
    cutString(text, limit) {
      return helper.cutString(text, limit)
    },
    loadMore() {
      this.page++
      this.loading = true
      this.getStory(this.page).then(response => {
        this.loading = false
        if (response.data.data.length == 0) {
          helper.success('no_more_result')
        }
      })
    },
    onScroll({target: {scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= (scrollHeight - 1)) {
        this.page++

        if (this.enableScroll) {
          this.getStory(this.page).then(response => {
            if (response.data.data.length == 0) {
              this.enableScroll = false
            }
          })
        }
      }
    },
    getStoryDetail(story, index = 0) {

      if (story.type === 51 || story.type === 52) {
        let payload = {
          id: story._id,
          type: story.type
        }

        this.$store.dispatch('social/countView', payload).then(res => {
          this.postDetail = res
          story.type === 51 ? this.isPostDetail = true : this.isVideo = true
        })
        return
      }

      let payload = {id: story._id}
      this.$store.commit("auth/setStoryIndex", index);
      this.viewStory(payload).then(() => {
        this.showStory = true
      });
    },
    closeStory() {
      this.showStory = false
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  created() {
    this.loadingStory = true
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    this.getStory().then(() => {
      this.loadingStory = false
    })
  }
}
</script>