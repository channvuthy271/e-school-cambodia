import store from "@/store";

let mode = {
    data() {
        return {
            className: "flex items-center justify-center fixed left-0 top-0 z-50 bg-black bg-opacity-80 w-full h-full",
            closeIcon: "flex items-center justify-center absolute w-8 h-8 rounded-full shadow cursor-pointer right-4 top-4"
        }
    },
    methods: {
        mode(className) {
            if (store.state.setting.darkMode) return `bg-secondary text-textSecondary ${className}`
            return `bg-white border-b ${className}`
        }
    }
}

export default mode;