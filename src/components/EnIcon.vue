<template>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g :fill="fill">
            <title>Layer 1</title>
            <text font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="'Open Sans SemiBold'" font-size="24" id="svg_2" y="149" x="227.5" stroke-width="0" stroke="#000" :fill="fill">EN</text>
            <text font-style="normal" font-weight="normal" transform="matrix(0.746766 0 0 0.795637 0.345804 1.90126)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="'Quicksand SemiBold'" font-size="24" id="svg_1" y="21.62843" x="-0.83045" stroke-width="0" :fill="fill">EN</text>
        </g>
    </svg>

</template>
<script>
    export default {
        props: {
            size: {
                default: () => {
                    return 24
                }
            },
            fill: {
                default: () => {
                    return "#4A4A4A"
                }
            }
        }
    }
</script>