<template>
    <div :style="{height: `${screenHeight}px`}">
        <div v-if="!isLive"
             :style="{height: `${videoOptions.height}px`}"
             :class="darkMode ? `bg-black` : `bg-white`"
             class="flex items-center justify-center h-full">
            <div class="relative cursor-pointer" @click="checkLive">
                <div>
                    <img src="/tv.png" alt="logo" class="mt-6 mr-9">
                </div>
            </div>
        </div>
        <div v-else>
            <video-player
                    :options="videoOptions" @player-state-changed="playerStateChanged"/>
        </div>
        <template v-if="isMessage">
            <Message :message="$t('5102')" @closeMessage="closeMessage"/>
        </template>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VideoPlayer from 'vue-vjs-hls'
    import {mapState} from "vuex";
    import TVIcon from "@/components/TVFillIcon";
    import config from "@/config";
    import Message from "@/components/Message";
    import axios from "axios";

    VideoPlayer.config({
        hls: true
    })

    Vue.use(VideoPlayer)
    export default {
        components: {
            TVIcon,
            Message
        },
        data() {
            return {
                isMessage: false,
                isLive: false,
                screenHeight: 0,
                videoOptions: {
                    height: 500,
                    source: {
                        type: 'application/x-mpegURL',
                        src: config.liveStreamUrl,
                        withCredentials: false
                    },
                    live: true
                }
            }
        },
        computed: {
            ...mapState('setting', ['darkMode'])
        },
        methods: {
            closeMessage() {
                this.isMessage = false
            },
            playerStateChanged(state) {

            },
            checkLive() {
                axios.get(config.liveStreamUrl).then(() => {
                    this.isLive = true
                }).catch(() => {
                    this.isMessage = true
                    this.isLive = false
                })
            }
        },
        created() {
            this.screenHeight = screen.height
            this.videoOptions.height = screen.height - 220
        }

    }
</script>