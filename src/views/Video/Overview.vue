<template>
  <div>
    <a
        :class="darkMode ? `text-gray-300` : `text-primary`"
        @click="
        () => {
          this.$router.go(-1);
        }
      "
        href="#"
        class="absolute right-2 bottom-2"
    >
      <BackMenuIcon :fill="darkMode ? `#ffffff` : `#055174`" :width="30"/>
    </a>

    <div
        :class="darkMode ? `bg-youtube` : `bg-gray-50`"
        class="p-5 h-screen overflow-y-scroll"
    >
      <div
          class="w-9/12"
          :class="
          darkMode
            ? `bg-youtube text-textSecondary`
            : `bg-white shadow rounded-b-xl`
        "
      >
        <div class="relative">
          <img :src="detail.thumbnail" class="w-full m-auto"/>
          <div class="w-full absolute left-0 -bottom-5 flex justify-center">
            <button
                @click="gotToPlayList"
                class="
                flex
                items-center
                justify-center
                bg-primary
                text-white
                w-1/2
                py-2
                outline-none
                rounded-full
                shadow
                text-xl
              "
            >
              <VideoCameraIcon fill="#fff" :size="35"/>
              <span class="ml-3">{{ $t("1117") }}</span>
            </button>
          </div>
        </div>
        <div class="my-10 px-5">
          <div class="font-bold text-2xl">
            {{ detail.teacher.name }} ({{ detail.title }})
          </div>
          <div class="flex justify-between items-center my-5">
            <div class="text-lg">
              <template v-if="detail.price && detail.price.highlight">
                {{ $t("1006") }}:
                <span class="mr-3">
                  $ <del>{{ khmerNumber(detail.price.highlight) }}</del>
                </span>
                <span class="text-red-600 font-semibold">
                  $ {{ khmerNumber(detail.price.year) }}
                </span>
              </template>
              <template v-else>
                <span>{{ $t("1007") }}</span>
              </template>
            </div>

            <div class="flex items-center">
              <Eye :height="30"></Eye>
              <span v-if="loading">
                <Loader :size="10" bg="#000"/>
              </span>
              <span v-else>
                <span class="pl-2">
                  {{ kFormatter(playlist.course.view) }}
                </span>
              </span>
            </div>
            <div class="cursor-pointer">
              <div v-if="playlist.is_favorite" @click="removeFavorite">
                <FavoriteFill fill="#c0272d" :size="30"/>
              </div>
              <div v-else @click="addToFavorite">
                <FavoriteIcon :size="30"/>
              </div>
            </div>
          </div>
        </div>

        <div
            class="border-b border-t py-3 px-5"
            :class="darkMode ? `border-button` : ``"
            v-if="!loading"
        >
          <div class="flex items-center text-center justify-between w-96">
            <div class="cursor-pointer" :title="$t('2108')">
              <YoutubeIcon
                  :fill="darkMode ? `#909090` : `#000000`"
                  :size="42"
              />
              <div
                  class="h-6 mt-1 bg-transparent flex items-end justify-center"
              >
                {{
                  playlist.course.total_video ? playlist.course.total_video : 0
                }}
              </div>
            </div>
            <div class="cursor-pointer" :title="$t('pdf')">
              <PdfIcon :fill="darkMode ? `#909090` : `#000000`" :size="42"/>
              <div
                  class="h-6 mt-1 bg-transparent flex items-end justify-center"
              >
                {{ playlist.course.total_pdf ? playlist.course.total_pdf : 0 }}
              </div>
            </div>
            <div class="cursor-pointer" :title="$t('support')">
              <ChatIcon :fill="darkMode ? `#909090` : `#000000`" :size="42"/>
              <div
                  class="h-6 mt-1 bg-transparent flex items-end justify-center"
                  :class="darkMode ? `text-skyBlue` : `text-primary`"
              >
                {{ playlist.course.has_support ? $t("1008") : $t("1009") }}
              </div>
            </div>
            <div
                class="cursor-pointer text-center flex justify-center flex-col"
                :title="$t('2111')"
            >
              <TestIcon :fill="darkMode ? `#909090` : `#000000`" :size="42"/>
              <div
                  class="h-6 mt-1 bg-transparent"
                  :class="darkMode ? `text-skyBlue` : `text-primary`"
              >
                {{ playlist.course.has_quiz ? $t("1008") : $t("1009") }}
              </div>
            </div>
            <div class="cursor-pointer" :title="$t('1114')">
              <CertificateIcon
                  :fill="darkMode ? `#909090` : `#000000`"
                  :size="42"
              />
              <div
                  class="h-6 mt-1 bg-transparent flex items-end justify-center"
                  :class="darkMode ? `text-skyBlue` : `text-primary`"
              >
                {{ playlist.course.has_certificate ? $t("1008") : $t("1009") }}
              </div>
            </div>
          </div>
        </div>

        <div
            class="flex items-center justify-center my-10 pb-20"
            v-if="!loading"
        >
          <div class="progressVideoDetail flex items-center justify-center">
            <div>
              <div class="barOverflowVideoDetail">
                <div
                    class="reportDetail"
                    :style="{
                    transform: `rotate(${
                      45 + Math.round(report('percentage')) * 1.8
                    }deg)`,
                  }"
                ></div>
              </div>
              <div
                  class="
                  absolute
                  w-full
                  top-0
                  h-full
                  flex flex-col
                  justify-end
                  items-center
                "
              >
                <div class="text-xl">
                  {{ $t("1117") }}
                </div>
                <div class="font-bold text-3xl mt-2">
                  {{ report("watch") }}/{{ report("total") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-40"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import VideoCameraIcon from "@/views/Video/components/VideoCameraIcon";
import Eye from "@/components/Eye";
import helper from "@/helper/helper";
import Loader from "@/components/Loader";
import FavoriteIcon from "@/components/FavoriteIcon";
import FavoriteFill from "@/components/FavoriteFill";
import CertificateIcon from "@/components/CertificateIcon";
import TestIcon from "@/components/TestIcon";
import PdfIcon from "@/components/PdfIcon";
import ChatIcon from "@/components/ChatIcon";
import YoutubeIcon from "@/components/YoutubeIcon";
import BackMenuIcon from "../../components/BackMenuIcon";

export default {
  components: {
    BackMenuIcon,
    YoutubeIcon,
    CertificateIcon,
    VideoCameraIcon,
    ChatIcon,
    PdfIcon,
    TestIcon,
    Eye,
    Loader,
    FavoriteIcon,
    FavoriteFill,
  },
  data() {
    return {
      detail: {},
      loading: false,
      payload: {
        id: null,
        package_id: null,
      },
    };
  },
  computed: {
    ...mapState("setting", ["darkMode"]),
    ...mapState("video", ["playlist"]),
  },
  methods: {
    ...mapActions("favorite", ["add"]),
    ...mapActions("video", ["getPlaylist"]),
    removeFavorite() {
      this.$store
          .dispatch("favorite/removeFavorite", this.detail._id)
          .then(() => {
            helper.success("0011");
            this.$store.commit("video/toggleFavorite", 0);
          });
    },
    addToFavorite() {
      this.add(this.detail._id).then(() => {
        helper.success("0010");
        this.$store.commit("video/toggleFavorite", 1);
      });
    },
    gotToPlayList() {
      if (localStorage.getItem("token") === null) {
        this.showMsg = true;
        return;
      }
      this.$router.push({
        name: "video-detail",
        params: {course: this.detail},
      });
    },
    report(field) {
      try {
        return this.playlist.course.report_watch[field];
      } catch (err) {
        return 0;
      }
    },
    kFormatter(view) {
      return helper.kFormatter(view);
    },
    reportWatch() {
      try {
        return (
            this.playlist.course.report_watch.watch +
            `/` +
            this.playlist.course.report_watch.total
        );
      } catch (err) {
        return "0/0";
      }
    },
    khmerNumber(str) {
      if (this.$i18n.locale == "kh") {
        return helper.khmerNumber(str);
      }
      return str;
    },
    getVideoDetail() {
      if (this.$route.params.course["order"]) {
        this.gotToPlayList();
        return;
      }
      this.payload.id = this.detail["_id"];
      this.payload.package_id = this.detail["package_id"];
      this.loading = true;
      this.getPlaylist(this.payload).then(() => {
        this.loading = false;
        this.reportWatch();
      });
    },
  },
  mounted() {
  },
  created() {

    this.detail = this.$route.params.course;

    this.getVideoDetail();
  },
};
</script>
<style>
.progressVideoDetail {
  position: relative;
  margin: 4px;
  float: left;
  text-align: center;
}

.barOverflowVideoDetail {
  /* Wraps the rotating .bar */
  position: relative;
  width: 290px;
  height: 145px; /* Half circle (overflow) */
  margin-bottom: -14px; /* bring the numbers up */
  overflow: hidden;
}

.reportDetail {
  position: absolute;
  top: 0;
  left: 0;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 15px solid #c9c9c9;
  border-bottom-color: #055174;
  border-right-color: #055174;
}
</style>