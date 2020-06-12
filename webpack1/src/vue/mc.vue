<template>
    <h2 class="orange-text">{{ this.msg }}</h2>
</template>

<script lang="ts">
export default {
    name: "MyComponent",
    data() {
        return {
            msg: "我是Vue框架"
        };
    }
}
</script>

<style>
    .orange-text{
        color: orange;
    }
</style>