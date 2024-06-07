import React from 'react'

function MessegeCard({ text }) {
  return (
    <div>

      <div class="rounded-lg shadow-xl border p-2 w-3xl mt-5">
        <div class="mb-4">
          <h1 class="text-lg lg:text-xl 2xl:text-2xl font-semibold ">{text.sendername}</h1>
          <div className="flex gap-2 text-base">
            <h2>{text.now.split('T')[0]}</h2>
            <h2>({text.now.split('T')[1].split(".")[0]})</h2>
          </div>
        </div>
        <div class=" text-sm lg:text-base xl:text-lg 2xl:text-xl flex justify-start items-center mb-8">
          {text.message}
        </div>
      </div>
    </div>

  )
}

export default MessegeCard