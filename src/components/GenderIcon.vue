<template>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         :width="size" :height="size"
         viewBox="0 0 172 172"
         style=" fill:#000000;">
        <g :fill="fill" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
           stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
           font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g :fill="fill">
                <path d="M127.28,6.88v6.88h32.895l-29.3475,29.3475c-6.5575,-5.44219 -14.95594,-8.7075 -24.1875,-8.7075c-20.98937,0 -37.84,16.85063 -37.84,37.84c0,15.48 9.59438,28.87719 23.005,34.7225c0.68531,-2.40531 1.075,-4.79719 1.075,-7.2025c-10.32,-5.16 -17.2,-15.48 -17.2,-27.52c0,-17.2 13.76,-30.96 30.96,-30.96c17.2,0 30.96,13.76 30.96,30.96c0,17.2 -13.76,30.96 -30.96,30.96h-0.3225c-0.34937,2.40531 -0.72562,4.47469 -1.075,6.88h1.3975c20.98938,0 37.84,-16.85062 37.84,-37.84c0,-9.23156 -3.26531,-17.63 -8.7075,-24.1875l29.3475,-29.3475v32.895h6.88v-44.72zM65.36,61.92c-20.98937,0 -37.84,16.85063 -37.84,37.84c0,9.23156 3.26531,17.63 8.7075,24.1875l-15.5875,15.5875l-14.7275,-14.7275l-4.945,4.945l14.7275,14.7275l-14.7275,14.7275l4.945,4.945l14.7275,-14.7275l14.7275,14.7275l4.945,-4.945l-14.7275,-14.7275l15.5875,-15.5875c6.5575,5.44219 14.95594,8.7075 24.1875,8.7075c20.98938,0 37.84,-16.85062 37.84,-37.84c0,-15.48 -9.59437,-28.87719 -23.005,-34.7225c-0.68531,2.06938 -1.075,4.44781 -1.075,7.2025c10.32,5.16 17.2,15.48 17.2,27.52c0,17.2 -13.76,30.96 -30.96,30.96c-17.2,0 -30.96,-13.76 -30.96,-30.96c0,-17.2 13.76,-30.96 30.96,-30.96h0.3225c0.34938,-2.40531 0.72563,-4.47469 1.075,-6.88z"></path>
            </g>
        </g>
    </svg>
</template>
<script>
    export default{
        name: "GenderIcon",
        props: {
            width: {
                default: function () {
                    return 35
                }
            },
            size: {
                default: function () {
                    return 35
                }
            },
            fill: {
                default: function () {
                    return "#000"
                }
            }
        }
    }
</script>