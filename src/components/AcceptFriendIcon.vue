<template>
   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" :height="size" viewBox="0 0 172 172" style=" fill:#000000;">
        <g :fill="fill" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g :fill="fill"><path d="M144.265,29.67c-2.28437,0.08063 -4.38062,1.29 -5.59,3.225l-64.715,99.0075l-41.925,-36.2275c-1.80062,-1.86781 -4.50156,-2.56656 -6.9875,-1.78719c-2.4725,0.76594 -4.31344,2.86219 -4.74344,5.41531c-0.43,2.56656 0.60469,5.14656 2.70094,6.69187l47.945,41.495c1.505,1.27656 3.49375,1.84094 5.44219,1.55875c1.96188,-0.29562 3.69531,-1.41094 4.77031,-3.06375l69.1225,-105.565c1.47813,-2.16344 1.59906,-4.95844 0.3225,-7.24281c-1.27656,-2.27094 -3.73562,-3.62812 -6.3425,-3.50719z"></path></g>
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