<template>
  <div class="mx-5 mb-5 pb-4" :class="darkMode?'bg-secondary text-gray-300':'bg-white'">
    <div class="text-sm">
      <div class="grid grid-cols-3 gap-x-10 gap-y-5 font-medium">
        <div class="px-5 cursor-pointer flex items-center border-b  py-3"
             :class="darkMode?`border-button`:`border-gray-500`" @click="selectFilter('all')">
          <div class="rounded-full flex justify-center items-center w-8 h-8"
               :class="darkMode?`bg-youtube`:`bg-primary`">
            <WatchIcon fill="#fff" :size="18"/>
          </div>
          <div class="flex justify-start flex-1">
            <span class="pl-5">{{ $t('all') }}</span>
          </div>
          <div class="h-5 w-5 rounded-full border border-gray-300 flex justify-center items-center">
            <div class="w-2 h-2 rounded-full" :class="darkMode?`bg-gray-300`:`bg-primary`"
                 v-if="filter_id==='all'"></div>
          </div>
        </div>
        <div v-for="(list,index) in filter"
             class="px-5 cursor-pointer flex justify-between items-center border-b py-3"
             :key="index" @click="selectFilter(list)" :class="darkMode?`border-button`:`border-gray-500`">
          <div class="rounded-full flex justify-center items-center w-8 h-8"
               :class="darkMode?`bg-youtube`:`bg-primary`">
            <WatchIcon fill="#fff" :size="18"/>
          </div>
          <div class="flex justify-start flex-1">
            <span class="pl-5"> {{ list.name }}</span>
          </div>
          <div class="h-5 w-5 rounded-full border border-gray-300 flex justify-center items-center">
            <div class="w-2 h-2 rounded-full" :class="darkMode?`bg-gray-300`:`bg-primary`"
                 v-if="filter_id ===list._id "></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WatchIcon from "./../../components/WatchVideoIcon.vue";
import {mapState, mapActions} from "vuex";

export default {
  components: {
    WatchIcon,
  },
  props: {
    filter: {
      default: () => {
        return [];
      }
    }
  },
  computed: {
    ...mapState("home", ["filter_id", "s"]),
    ...mapState("setting", ["darkMode"])
  },
  methods: {
    ...mapActions("home", ["getList"]),
    closeFilter() {
      this.$emit("closeFilter");
    },

    selectFilter(list) {
      this.$store.commit("home/receiveFilter", list._id)
      this.$emit("closeFilter", list);
    }
  }
};
</script>