<script setup>
import { ref } from "vue";

const open = ref(true);

const menus = ref([
  {
    id: "9334440a-78c8-4241-a03b-d439a35c1197",
    title: "داشبورد",
    src: "Chart_fill",
  },
  { id: "246a5f17-4c2f-4f6f-884c-4bd3cf2d4589", title: "پیام ها", src: "Chat" },
  {
    id: "01aa50dc-a7f0-4bda-ae30-27cb9c10c0e4",
    title: "پروفایل",
    src: "User",
    gap: true,
  },
  {
    id: "b35cd761-adce-4991-9cbf-504f0bb8dbf4",
    title: "تست ",
    src: "Calendar",
  },
  {
    id: "5e7dfcd5-b480-4bdd-8eed-4cd6b27e9167",
    title: "جتجو",
    src: "Search",
  },
  {
    id: "1be6fde4-1f3f-4178-ab2a-d264d91ff743",
    title: "تست",
    src: "Chart",
  },
  {
    id: "6424a3de-223d-493e-bf29-5ce8755748fc",
    title: "تست ",
    src: "Folder",
    gap: true,
  },
  {
    id: "1ff0c743-b3d8-4a57-9bcc-d640c2a9880b",
    title: "تنظیمات",
    src: "Setting",
  },
]);
</script>

<template>
  <div class="flex bg-light-white">
    <div
      :class="{
        'w-72': open,
        'w-20': !open,
        'bg-dark-purple': true,
        'h-screen': true,
        'p-5': true,
        'pt-8': true,
        relative: true,
        'duration-300': true,
      }"
    >
      <img
        src="./assets/control.png"
        class="absolute cursor-pointer -rotate-180 -left-3 top-9 w-7 border-dark-purple border-2 rounded-full"
        :class="{ 'rotate-180': !open }"
        @click="open = !open"
      />
      <div class="flex gap-x-4 items-center">
        <img
          src="./assets/logo.png"
          class="cursor-pointer duration-500"
          :class="{ 'rotate-[360deg]': open }"
        />
        <h1
          class="text-white origin-left font-medium text-xl duration-200"
          :class="{ 'scale-0': !open }"
        >
          ادمین
        </h1>
      </div>
      <ul class="pt-6">
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 nav"
          :class="{
            'mt-9 ': menu.gap,
            'mt-2': !menu.gap,
            'bg-light-white': index === 1,
          }"
        >
          <img
            src="./assets/Calendar.png"
            :alt="'./assets/' + menu.src + '.png'"
            class="origin-right"
          />
          <span class="origin-right duration-200" :class="{ hidden: !open }">
            {{ menu.title }}
          </span>
        </li>
      </ul>
    </div>
    <div class="h-screen flex-1 p-7">
      <h1 class="text-2xl font-semibold">
        صفحه اصلی
        <router-view></router-view>
      </h1>
    </div>
  </div>
</template>
