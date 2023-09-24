<template>
  <main>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>

    <Header />
    <slot />
    <Footer />
  </main>
</template>

<script setup lang="ts">
const title = ref('App')
</script>
