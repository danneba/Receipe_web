<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <div class="bg-gray-100 max-w-full h-48  p-6">
        
    </div>

    <div class="flex items-center bg-white-100 shadow-md max-w-full ">
      <div class="space-y-1 pl-72">
         <span class="block w-8 h-1 bg-gray-600"></span>
         <span class="block w-8 h-1 bg-gray-600"></span>
         <span class="block w-8 h-1 bg-gray-600"></span>
      </div>
      <div class="pl-3">
        <p>EXPLORE</p>
      </div>
      <div class="pt-2 pl-6">
          <img src="assets/img.png" alt=""/>
      </div>
      <div class=" pl-96 flex">
          <img src="assets/login.png" class="h-6" alt=""/>
          <p class="pl-2 font-bold">Join Now</p>
          <img src="assets/down.png" class="h-4 pl-1 pt-1.5" alt=""/>
      </div>
      <div class="pl-3 flex">
        <p class="font-light">| login |</p>
        <p class="pl-5 font-bold">GET ALLRECIPES MAGAZINE</p>
      </div>
    </div>
    <div class="flex items-center bg-define-yellow h-65 max-w-full">
      <div class="pl-96 flex items-center">
      <input type="search"  class="block pl-12 p-2.5 w-96  placeholder-black text-sm text-dark-900 bg-white-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-800 focus:border-blue-900 " placeholder="Find a Recipe" required>
            <button type="submit" class="right-0 p-2.5 text-sm font-medium text-white bg-define-pink  hover:bg-define-pink  ">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
      </div>
      <!-- <div class="flex  items-center pl-20 space-x-6 ">
           <div class="w-1/12">
             <img src="assets/airfryer12.jpeg" alt="" class="shadow rounded-full  h-auto align-middle max-w-full border-none" />
             <p class="font-light">Air Fryer Receipes</p>
           </div>
           <div class="w-1/12">
             <img src="assets/airfryer12.jpeg" alt="" class="shadow rounded-full  h-auto align-middle max-w-full border-none" />
             <p class="font-light">Appetizers and Sn</p>
           </div>
      </div> -->
      <div class="flex space-x-2">
         <div class="relative pl-8 w-24 h-34">
           <img class="rounded-full shadow-sm" src="assets/Airfryer.jpg" alt="" />
           <p class="font-light">Air Fryer</p>
          </div>
          <div class="relative pl-8 w-24 h-34">
            <img class="rounded-full shadow-sm" src="assets/Airfryer.jpg" alt="" />
            <p class="font-light">Air Fryer</p>
          </div>
          <div class="relative pl-8 w-24 h-34">
           <img class="rounded-full shadow-sm" src="assets/Airfryer.jpg" alt="" />
           <p class="font-light">Air Fryer</p>
          </div>
          <div class="relative pl-8 w-24 h-34">
           <img class="rounded-full shadow-sm" src="assets/Airfryer.jpg" alt="" />
           <p class="font-light">Air Fryer</p>
          </div>
          <div class="relative pl-8 w-24 h-34">
           <img class="rounded-full shadow-sm" src="assets/Airfryer.jpg" alt="" />
           <p class="font-light">Air Fryer</p>
          </div>
          <div class="relative pl-8 w-24 h-34">
           <img class="rounded-full shadow-sm" src="assets/Airfryer.jpg" alt="" />
           <p class="font-light">Air Fryer</p>
          </div>
          <div class="relative pl-8 w-24 h-34">
           <img class="rounded-full shadow-sm" src="assets/Airfryer.jpg" alt="" />
           <p class="font-light">Air Fryer</p>
          </div>
     </div>
    </div>
    <div class="flex bg-white-100 h-screen   w-full">
      <div class="flex ">
        <ul>
          <li>
            <div class="w-75 h-85 ml-72 mt-9">
              <img class="h-full w-full object-cover" src="assets/pepper.jpg"/>
              <a href="#" class="font-bold"><p>Stuffed Pepper Receipes </p></a>
            </div>
          </li>
          <li>
             <div class="w-75 h-85 ml-72 space-y-6 mt-9">
              <img class="h-full w-full object-cover" src="assets/Taco.jpg"/>
              <a href="#" class="font-bold"><p>Spicying Taco </p></a>
             </div>
          </li>
        </ul>
        <div class="flex w-98 h-95 pl-14 pt-9">
          <img class="h-full w-full object-cover" src="assets/Taco.jpg"/>
          
        </div>
        
      </div>
      <a href="#" class="flex  ml-4 pt-95 font-bold"><p>SpicyingTaco </p></a>
      <div class="flex items-center">

      </div>
    </div>

    </nav>
        
</template>

<style>

</style>
