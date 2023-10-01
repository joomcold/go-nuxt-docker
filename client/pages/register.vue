<template>
  <section>
    <div class="flex items-center justify-center">
      <NuxtLink class="link-hover link-info link" to="/">
        <img src="/nintendo.jpg" alt="Logo" width="100" height="100" />
      </NuxtLink>
    </div>
    <div class="card glass flex-column mx-auto mt-6 flex w-3/4">
      <div class="flex flex-row">
        <div class="card-body w-2/4">
          <h1 class="card-title">Register</h1>
          <div class="flex gap-2 pb-10">
            <h6>Already have an account?</h6>
            <NuxtLink class="link-hover link-info link" to="/login">
              Login
            </NuxtLink>
          </div>
          <span class="label-text text-inherit">Email</span>
          <input
            type="email"
            placeholder="user@example.com"
            class="input input-info input-sm w-full max-w-xs focus:outline-none"
          />
          <span class="label-text text-inherit">Password</span>
          <input
            type="password"
            placeholder="password"
            class="input input-info input-sm w-full max-w-xs focus:outline-none"
          />
          <span class="label-text text-inherit">Password Confirmation</span>
          <input
            type="password"
            placeholder="password"
            class="input input-info input-sm w-full max-w-xs focus:outline-none"
          />
        </div>
        <div class="card-body w-2/4">
          <h1 class="card-title">Upload avatar</h1>
          <div class="avatar">
            <div class="mb-4 w-24">
              <img class="rounded" src="@/assets/images/drink.jpg" alt="" />
            </div>
          </div>
          <input
            type="file"
            class="file-input file-input-sm file-input-accent w-full max-w-xs"
          />
        </div>
      </div>
      <div class="card-actions flex justify-center py-8">
        <button class="btn btn-info btn-active btn-sm w-1/3 max-w-xs">
          Register
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'plain'
})
</script>
