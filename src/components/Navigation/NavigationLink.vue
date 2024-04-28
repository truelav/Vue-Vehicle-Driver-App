<template>
    <RouterLink to="/"> 
        <div class="my-router-link">
            <my-button 
                theme="'btn-link'"
                :theme="{'btn-link-active': $route.path === '/'}"
            > 
                Home 
            </my-button> 
        </div>
    </RouterLink>
    <RouterLink to="/vehicles">
        <div class="my-router-link">
            <my-button 
                theme="btn-primary"
                :theme="{'btn-link-active': $route.path === '/vehicles'}"
            > 
                Vehicles 
            </my-button>
        </div> 
    </RouterLink>
    <RouterLink to="/drivers"> 
        <div class="my-router-link">
            <my-button 
                theme="btn-primary"
                :theme="{'btn-link-active': $route.path === '/drivers'}"
            > 
                Drivers 
            </my-button>
        </div>
    </RouterLink>
    <RouterLink to="/about">
        <div class="my-router-link">
            <my-button 
                theme="btn-primary"
                :theme="{'btn-link-active': $route.path === '/about'}"
            > 
                About 
            </my-button>
        </div>
    </RouterLink>
</template>

<script>
    import { RouterLink } from 'vue-router'
    export default {
        props: {
            myRouterLink: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .router-link {
        display: inline-block;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        border: 1px solid transparent;
        padding: .625rem 1.25rem;
        font-size: 15px;
        line-height: 1.5;
        border-radius: .25rem;
        -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    }

    .router-link:hover {
        -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
        box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
        cursor: pointer;
    }

    .router-link {
        color: var(--primary);
        background-color: var(--white);
        border-color: var(--primary);
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
        margin-top: 15px;
        margin-bottom: 15px;
        width: 175px;
    }

    .router-link-exact-active {
        color: var(--white);
        background-color: var(--primary);
        border-color: var(--primary);
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
        width: 175px;
    }
</style>