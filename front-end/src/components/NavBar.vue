<template>
  <div class="nav-bar">
    <RouterLink to="/products" class="products-link">
      <div class="logo-wrap">
        <img :src="logo" alt="logo" />
      </div>
    </RouterLink>
    <RouterLink to="/cart" class="cart-link">
      <button>Shopping Cart</button>
    </RouterLink>
  </div>
</template>

<script>
import logo from '@/assets/logo-hexagon.svg'

export default {
  name: "NavBar",
  data() {
    return {
      logo,
    }
  }
}
</script>

<style>

</style>