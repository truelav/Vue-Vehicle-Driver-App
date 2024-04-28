<template>
    <div class="list-container">
        <my-loading :modelValue="modelValue"/>
        <div 
            v-for="index in 5" :key="index"
            class="list-item-skeleton-container"
        >
            <div class="list-item-skeleton">
                <div class="image-skeleton"></div>
            </div>
            <div class="list-item-skeleton">
                <div class="text-skeleton"></div>
                <div class="text-skeleton"></div>
            </div>
            <div class="list-item-skeleton">
                <div class="button-skeleton"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import MyLoading from './MyLoading.vue';

  export default {
    name: 'my-skeleton',
    components: { MyLoading},
    props: {
        modelValue: {
            type: String
        },
        theme: {
            type: String
        }
    }
  }
</script>
  
<style scoped>
    .list-item-skeleton-container {
        gap: 15px;
        padding: 15px;
        display: grid;
        grid-template-columns: 1fr 9fr 2fr;
        border-top: 1px solid var(--border-color);
    }
    .list-item-skeleton {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .image-skeleton {
        width: 50px;
        height: 45px;
        border-radius: 15px;
        background-color: var(--lighter);
    }
    .text-skeleton {
        border-radius: 15px;
        background-color: var(--lighter);
        width: 100%;
        height: 15px;
    }

    .button-skeleton {
        width: 100%;
        height: 50px;
        border-radius: 15px;
        background-color: var(--lighter);
    }
</style>