<template>
  <div class="relative text-sm">
    <div class="p-5 mb-1" :class="darkMode?'bg-secondary border-t border-b border-button':'bg-white shadow'">
      <div class="flex justify-between w-3/5 ">
        <div class="flex-1 relative">
          <input type="text" v-on:keyup.enter="filterSearch" :placeholder="$t('1001')" v-model="s"
                 :class="darkMode?'bg-secondary border-b border-button text-gray-300':'border-gray-300'"
                 class="w-full h-12 leading-12 focus:outline-none bg-transparent border border-l-0 border-r-0 border-t-0 pl-8 text-sm">
          <div>
            <div v-if="s" class="absolute left-0 top-4 cursor-pointer"
                 :title="$t('clear')" @click="clear">
              <CloseIcon :width="20" :height="20" :fill="darkMode?'#afb0b4':'#000000'"/>
            </div>
            <div class="h-5 absolute left-0 top-3" v-else>
              <SearchIcon :fill="darkMode?'#afb0b4':'#000000'"/>
            </div>
          </div>
          <div class="flex absolute right-0 cursor-pointer justify-center items-center h-12 leading-12 top-0"

               @click="showFilter">
            <p class="mr-2">
                            <span v-if="selectedFilterName==='all'"
                                  :class="darkMode?'text-gray-300':''">{{ $t('1002') }}</span>
              <span :class="darkMode?'text-gray-300':''" v-else>{{ selectedFilterName }}</span>
            </p>
            <ChevronIcon :fill="darkMode?'#afb0b4':'#000000'"/>
          </div>
        </div>
      </div>
    </div>
    <List :filter="filter" v-if="showFilterForm" @closeFilter="closeFilter($event)"/>
  </div>
</template>

<script>
import ChevronIcon from "./../../components/ChevronIcon.vue"
import SearchIcon from "./../../components/SearchIcon.vue"
import List from "./List.vue"
import {mapState, mapActions} from "vuex"
import CloseIcon from "./../../components/CloseIcon.vue"

export default {
  name: "BoxFilter",
  data() {
    return {
      showFilterForm: false,
      s: ""
    }
  },
  components: {
    ChevronIcon,
    SearchIcon,
    List,
    CloseIcon
  },
  computed: {
    ...mapState('setting', ['localize', 'darkMode']),
    ...mapState('home', ['filter', 'selectedFilterName', 'filter_id'])
  },
  methods: {
    ...mapActions('video', ['getVideo']),
    showFilter() {
      this.showFilterForm = !this.showFilterForm
    },
    closeFilter(event) {
      this.showFilterForm = false
      this.$emit("closeFilter", event)
    },
    clear() {
      this.s = ""
      this.$store.commit("home/receiveFilter", 'all');
      this.$store.commit("home/selectedFilterName", 'all');
      this.filterSearch()
    },
    filterSearch() {
      this.$emit("filterSearch", this.s)
      this.$emit("enableUserScroll", true)
    }
  },
  watch: {
    s: function (val) {
      this.$store.commit("home/receiveS", val);
    }
  }
}
</script>

<style>

</style>
