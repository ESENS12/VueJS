<template>
<div>
    <vsm-menu
    :menu="menu"
    :base-width="380"
    :base-height="400"
    :screen-offset="10"
    element="header"
    @open-dropdown="onOpenDropdown"
    @close-dropdown="onCloseDropdown"
  >
    <template #default="data">
      <div>{{ data }}</div>
    </template>
    <template #before-nav>
      <li class="vsm-section">
        <!-- <img -->
          <!-- src="/path/to/file" -->
          <!-- title="My Logo" -->
        <!-- > -->
      </li>
    </template>
    <template #title="data">
      {{ data.item.title }}
    </template>
    <template #after-nav>
      <li class="vsm-section vsm-mob-hide">
        <button>My Button</button>
      </li>
      <vsm-mob >Mobile Content</vsm-mob>
    </template>
  </vsm-menu>
</div>
</template>

<script>

// import VueStripeMenu from 'vue-stripe-menu'
import 'vue-stripe-menu/dist/vue-stripe-menu.css' 

export default {

data() {
    return {
      menu: [
        {
          title: 'News',
          dropdown: 'news',
          element: 'span',
          attributes: {
            class: ['my-class1', { 'my-class2': true }],
            'data-big': 'yes'
          },
          listeners: {
            mouseover: (evt) => {
              console.log('news hover', evt)
            }
          },
          new_section: false,
        },
        {
          title: 'External Link',
          attributes: {
            href: 'https://github.com/Alexeykhr/vue-stripe-menu',
            target: '_blank'
          }
        }
        // ...
      ]
    }
  },
  methods: {
    onOpenDropdown() {
      console.log('onOpenDropdown')
    },
    onCloseDropdown() {
      console.log('onCloseDropdown')
    }
  }
}
</script>

<style>

</style>