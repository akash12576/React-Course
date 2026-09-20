

import React from 'react'

export const Card = () => {
  return (
    // <div>
    //     {/* <img src="https://images.pexels.com/photos/10194141/pexels-photo-10194141.jpeg?_gl=1*13io8f6*_ga*NjE3MzI0MDc5LjE3NzQ4NTc0Mzc.*_ga_8JE65Q40S6*czE3ODk5MTYzODMkbzQkZzEkdDE3ODk5MTY0NzYkajI3JGwwJGgw" alt="" />
    //     <h1 className="text-2xl bg-green-500 p-3 rounded">A card for photos</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestias.</p> */}
        
    // </div>

    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card;
