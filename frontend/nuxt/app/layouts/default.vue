<template>
    <main>
        <header>
            server status: {{ status }}
            <br>
        </header>
        <slot/>
    </main>
</template>

<script setup>
const { data: status } = useFetch('http://localhost:9999/status')
</script>