<template>
  <section>
    <div class="card glass mx-auto mt-6 w-3/4 flex-row">
      <div class="card-body w-2/4">
        <h1 class="card-title">Login to your account</h1>
        <div class="flex gap-2 pb-10">
          <h6>Not a member?</h6>
          <NuxtLink class="link-hover link-info link" to="/register">
            Register
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
        <div class="flex w-full max-w-xs flex-row justify-between">
          <label class="label w-fit cursor-pointer justify-start gap-2">
            <input
              type="checkbox"
              checked="false"
              class="checkbox-primary checkbox checkbox-xs"
            />
            <span class="label-text text-inherit">Remember me</span>
          </label>
          <label class="label">
            <NuxtLink class="link-hover link-info link" to="/register">
              Forgot password?
            </NuxtLink>
          </label>
        </div>
        <div class="card-actions justify-start">
          <button class="btn btn-info btn-active btn-sm w-full max-w-xs">
            Login
          </button>
        </div>
        <div class="flex w-full max-w-xs flex-col py-6">
          <div class="divider before:bg-slate-500 after:bg-slate-500">
            Or continue with
          </div>
        </div>
        <div class="card-actions max-w-xs justify-between">
          <button class="btn-google w-5/12 max-w-xs">
            <Icon name="logos:google-icon" />
            Google
          </button>
          <button class="btn-facebook w-5/12 max-w-xs">
            <Icon name="logos:facebook" />
            Facebook
          </button>
        </div>
      </div>
      <div class="card-body w-2/4 p-0">
        <img class="rounded-r-2xl" src="@/assets/images/drink.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.btn-google {
  @apply btn btn-active btn-sm bg-white text-gray-700 hover:bg-white;
}

.btn-facebook {
  @apply btn btn-active btn-sm bg-blue-600 text-white hover:bg-blue-600;
}
</style>
