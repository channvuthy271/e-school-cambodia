<template>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    :width="size" :height="size"
    viewBox="0 0 172 172"
    style=" fill:#000000;">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path>
            <g :fill="fill">
                <path d="M74.53333,17.2c-31.59642,0 -57.33333,25.73692 -57.33333,57.33333c0,31.59642 25.73692,57.33333 57.33333,57.33333c13.73998,0 26.35834,-4.87915 36.24766,-12.97839l34.23203,34.23203c1.43802,1.49778 3.5734,2.10113 5.5826,1.57735c2.0092,-0.52378 3.57826,-2.09284 4.10204,-4.10204c0.52378,-2.0092 -0.07957,-4.14458 -1.57735,-5.5826l-34.23203,-34.23203c8.09924,-9.88932 12.97839,-22.50768 12.97839,-36.24766c0,-31.59642 -25.73692,-57.33333 -57.33333,-57.33333zM74.53333,28.66667c25.39937,0 45.86667,20.4673 45.86667,45.86667c0,25.39937 -20.46729,45.86667 -45.86667,45.86667c-25.39937,0 -45.86667,-20.46729 -45.86667,-45.86667c0,-25.39937 20.4673,-45.86667 45.86667,-45.86667z"></path>
            </g>
        </g>
    </svg>
</template>

<script>
    export default{
        name: "SearchIcon",
        props:{
            fill:{
            default:()=>{
                return "#000000"
            }
            },
            size:{
                default:()=>{
                    return 24
                }
            }
        }
    }
</script>