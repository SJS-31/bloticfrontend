import React from 'react'

export default function Invitation() {
  return (
    <div className="  justify-between  py-10 px-12 lg:py-20 lg:px-80 ">
      
        <h1 className="text-6xl lg:text-8xl">Invitation</h1>
        <p className='text-3xl lg:text-5xl text-gray-500 '>to the <span className='text-blue-500'>Future</span></p>
        
      
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8  py-5">
          <div className='bg-gradient-to-r from-blue-500 to-blue-100 p-3 rounded-xl shadow-md lg:p-5'>
            <h1 className="lg:text-4xl text-3xl text-blue-600">Blotic Points</h1>

            <p className="text-sm lg:text-lg mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              facere quisquam accusantium ipsam, corporis maiores corrupti
              perferendis impedit, nihil consequuntur reiciendis. 
            </p>
            <p className="text-sm lg:text-lg mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              facere quisquam accusantium ipsam, corporis maiores corrupti
              perferendis impedit, nihil consequuntur reiciendis. 
            </p>
            
          </div>
          <div className='p-3 lg:p-5'>
            <h1 className="lg:text-4xl text-3xl text-blue-500">College Chpater</h1>

            <p className="text-sm lg:text-lg mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              facere quisquam accusantium ipsam, corporis maiores corrupti
              perferendis impedit, nihil consequuntur reiciendis. 
            </p>
            <p className="text-sm lg:text-lg mt-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              facere quisquam accusantium ipsam, corporis maiores corrupti
              perferendis impedit, nihil consequuntur reiciendis. 
            </p>
            <button class="bg-sky-600 hover:bg-gradient-to-r from-cyan-500 to-blue-500  text-white font-bold w-full mt-5 py-2 px-4 rounded shadow hover:shadow-lg transition duration-500 transform hover:-translate-y-1 hover:scale-10">
                      <a href="">Apply</a>
                    </button>
          </div>
          
        </div>
        
      
    </div>
  )
}
