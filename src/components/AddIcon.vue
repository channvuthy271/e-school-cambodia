<template>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         :width="size" :height="size"
         viewBox="0 0 172 172"
         style=" fill:#000000;">
        <g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
           stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
           font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero"></path>
            <g :fill="fill" fill-rule="evenodd">
                <path d="M78.83333,14.33333v64.5h-64.5v14.33333h64.5v64.5h14.33333v-64.5h64.5v-14.33333h-64.5v-64.5z"></path>
            </g>
        </g>
    </svg>
</template>

<script>
    export default{
        name: "AddIcon",
        props: {
            size: {
                default: function () {
                    return 24
                }
            },
            fill: {
                default: function () {
                    return "#ffffff"
                }
            }
        }
    }
</script>