<script setup>
   import Title from './Title.vue'
   import { ref } from 'vue'
   
   const currentDate = ref(9)
</script>

<style scoped>
   .cell-style {
      @apply duration-300 py-3 px-4 text-center cursor-pointer;
   }
   
   .cell-disable {
      @apply text-gray-300;
   }
   
   .cell-active {
      @apply bg-blue-700 text-white;
   }
   
   .dot-cell {
      transform: translateX(-50%);
   }
</style>

<template>
   <Title>
      <template v-slot:title >
         <h1>Kalender</h1>
      </template>
  </Title>
   <section class="w-10/12 mx-auto bg-white border p-10 rounded-xl border-gray-500 shadow-xl justify-center items-center flex gap-6">
      <div>
         <!-- component -->
         <div class="flex flex-grow flex-col bg-white sm:rounded overflow-hidden">
            <div class="mx-auto flex items-center gap-4">
               <i class="fa fa-chevron-left text-2xl font-bold text-white rounded-full px-2 flex justify-center items-center bg-sunset"></i>
               <h1 class="text-2xl font-bold">Oktober</h1>
               <i class="fa fa-chevron-right text-xl font-bold text-white rounded-full px-2 flex justify-center items-center bg-sunset"></i>
            </div>
            <div class="flex px-2 py-2 w-full mx-auto">
               <div class="flex flex-wrap bg-white overflow-hidden">
                  <div class="w-auto mx-3 my-3  rounded border shadow-sm">
                     <div class="">
                        <table class="w-full">
                           <tr class="border-b">
                              <th class="py-3 px-4">Sn</th>
                              <th class="py-3 px-4">Sl</th>
                              <th class="py-3 px-4">Rb</th>
                              <th class="py-3 px-4">Km</th>
                              <th class="py-3 px-4">Jm</th>
                              <th class="py-3 px-4">Sb</th>
                              <th class="py-3 px-4">Mg</th>
                           </tr>
                           <tr>
                              <td class="cell-style cell-disable">27</td>
                              <td class="cell-style cell-disable">28</td>
                              <td class="cell-style cell-disable">29</td>
                              <td class="cell-style cell-disable">30</td>
                              <td class="cell-style">1</td>
                              <td class="cell-style">2</td>
                              <td class="cell-style">3</td>
                           </tr>
                           <tr>
                              <td class="cell-style">4</td>
                              <td class="cell-style">5</td>
                              <td class="cell-style">6</td>
                              <td class="cell-style">7</td>
                              <!-- event -->
                              <td class="cell-style relative" @click="currentDate = 8" :class="currentDate === 8 ? 'cell-active' : ''">
                                 <p>8</p>
                                 <i class="absolute left-1/2 fa dot-cell fa-circle" :class="currentDate === 8 ? 'text-sunset' : 'text-gray-50'" style="font-size: 8px"></i>
                              </td>
                              <td class="cell-style relative" @click="currentDate = 9" :class="currentDate === 9 ? 'cell-active' : ''">
                                 <p>9</p>
                                 <i class="absolute left-1/2 fa dot-cell fa-circle" :class="currentDate === 9 ? 'text-sunset' : 'text-gray-50'" style="font-size: 8px"></i>
                              </td>
                              <!-- event -->
                              <td class="cell-style">10</td>
                           </tr>
                           <tr>
                              <td class="cell-style">9</td>
                              <td class="cell-style">10</td>
                              <td class="cell-style">11</td>
                              <td class="cell-style">12</td>
                              <td class="cell-style">13</td>
                              <td class="cell-style">14</td>
                              <td class="cell-style">15</td>
                           </tr>
                           <tr>
                              <td class="cell-style">16</td>
                              <td class="cell-style">17</td>
                              <td class="cell-style">18</td>
                              <td class="cell-style">19</td>
                              <td class="cell-style">20</td>
                              <td class="cell-style">21</td>
                              <td class="cell-style">22</td>
                           </tr>
                           <tr>
                              <td class="cell-style">23</td>
                              <td class="cell-style">24</td>
                              <td class="cell-style">25</td>
                              <td class="cell-style">26</td>
                              <td class="cell-style">27</td>
                              <td class="cell-style">28</td>
                              <td class="cell-style">29</td>
                           </tr>
                           <tr>
                              <td class="cell-style">30</td>
                              <td class="cell-style">31</td>
                              <td class="cell-disable">1</td>
                              <td class="cell-disable">2</td>
                              <td class="cell-disable">3</td>
                              <td class="cell-disable">4</td>
                              <td class="cell-disable">5</td>
                           </tr>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Info -->
      <div class="text-center flex justify-center items-center">
         <div>
            <span class="bg-sunset rounded-full px-3 py-1 text-gray-50 font-bold text-xl">{{ currentDate }}</span>
            <p class="text-xl font-semibold text-chatams mt-4">{{ currentDate }} Oktober 2021</p>
            <p class="text-xl font-semibold text-sunset">Dies Natalis ke-9 Politeknik Hasnur</p>
         </div>
      </div>
   </section>
</template>