<template>
    <svg id="Capa_1" enable-background="new 0 0 443.294 443.294" :height="size" viewBox="0 0 443.294 443.294" xmlns="http://www.w3.org/2000/svg">
        <g :fill="fill">
            <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"/>
            <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"/>
        </g>
    </svg>
</template>
<script>
    export default{
        props: {
            fill: {
                type: String,
                default: function () {
                    return "#333333"
                }
            },
            size: {
                type: Number,
                default: function () {
                    return 24;
                }
            }
        }
    }
</script>