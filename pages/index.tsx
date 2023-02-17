import type {NextPage} from 'next';
 
const Home: NextPage = () => {
  return (
    <div className='bg-slate-100  xl:place-content-center py-20 px-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen'>
      <div className='bg-white dark:bg-black p-10  rounded-2xl shadow-xl flex flex-col '>
        <span className='font-semibold text-3xl dark:text-white'>Select Item</span>
        <ul>{[1,2].map(i => <div key={i} className="flex justify-between my-2">
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$19</span>
        </div>)}</ul>
       
        <div className='flex justify-between mt- pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$10</span>
        </div>
       <button className='mt-5 bg-blue-500 text-white p-3 text-center
        rounded-xl w-2/4 mx-auto
        hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:text-red-500
        '>
        Checkout
        </button>
      </div>


      <div className='bg-white overflow-hidden rounded-2xl shadow-xl'>
        <div className='bg-blue-500 portrait:bg-indigo-500 landscape:bg-teal-500 p-6 pb-14 xl:pb-40' >
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl p-6 bg-white relative -top-5'>
         <div className='flex relative -top-16 items-end justify-between '>
         <div className='flex flex-col items-center '>
            <span className='text-sm text-gray-500'>Orders</span>
            <span className='font-medium '>340</span>
          </div>
          <div className='h-24 w-24 bg-red-400 rounded-full'></div>
          <div className='flex flex-col items-center '>
            <span className='text-sm text-gray-500'>Spent</span>
            <span className='font-medium '>$2,310</span>
          </div>
         </div>

          <div className='relative flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>Tony Mole</span>
            <span className='text-sm text-gray-500'>미국</span>
          </div>
        </div>
      </div>


      <div className='bg-white p-10 rounded-2xl shadow-xl group lg:col-span-2 xl:col-span-1'>
          <div className='flex mb-5 justify-between items-center'>
            <span>👈</span>
            <div className='space-x-3'>
              <span>⭐️ 4.9</span>
              <span className='shadow-xl p-2 rounded-md'>❤️</span>
            </div>
          </div>
          <div className='bg-zinc-400 h-72 mb-5 group-hover:bg-red-300'/>
          <div className='flex flex-col text-lg'>
            <span className='font-medium mb-1.5 '>Swoon Loounge</span>
            <span className='text-xs text-gray-500 '>Chair</span>
           <div className='mt-3 mb-5 flex justify-between items-center'>
           <div className='space-x-2'>
             <button className='w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition '></button>
             <button className='w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition'></button>
             <button className='w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition'></button>
            </div>
            <div className='flex items-center space-x-5'>
              <button className=' rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8  text-xl text-gray-500'>-</button>
              <button>1</button>
              <button className=' rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8  text-xl text-gray-500'>+</button>
            </div>
           </div>
           <div className='flex justify-between items-center'>
            <span className='font-medium text-2xl'>$450</span>
            <button className='bg-blue-500 py-2 px-8 text-xs text-center text-white rounded-lg'>Add to card</button>
           </div>
          </div>
      </div>
      {/* <div className='bg-white p-10 rounded-2xl shadow-xl'></div> */}
    </div>
    // <div>
    //Html 속성 상태 따른 CSS 효과 주기
    //   <form className='flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100'>
    //     <input type="text" required placeholder='Username'className='required:border-2 border-yellow-500 invalid:bg-red-500 0'/>
    //     <input type="password" required placeholder='Password' className='placeholder-shown:bg-red-500 placeholder:text-black-500'/>
    //     <input type="submit" value="Login" className='bg-white'/>
    //   </form>
    // </div>
    //
    //peer modifiter input의 상태에 따라서 span의 스타일을 변화 시킬 수 있다.
    //peer 마치 framer-motion 의 layoutId 처럼 peer 라고 서로 명시 시켜주면 서로 상태를 공유 하고 변화 시켜줄 수 있다.
    // <div>
    //   <form className='flex flex-col space-y-2 p-5'>
    //     <input type="text"
    //     required
    //     placeholder='Username'
    //     className='border p-1 peer border-gray-400 rounded-md'
    //     />
    //     <span className='hidden peer-invalid:block peer-invalid:text-red-500'>This input is invalid</span>
    //     <span className='hidden peer-valid:block peer-valid:text-green-500'>Awesome User Name!</span>
    //     <span className='hidden peer-hover:block peer-valid:text-teal-500'>really looking forward what username you will make!</span>
    //     <input type="text" value="Login" className='text-center' />
    //   </form>
    // </div>
    // details, summary 태그들과 그의 css 효과들
    // <div className='flex flex-col space-y-2 p-5'>
    //   <details className='select-none open:text-white open:bg-indigo-500'>
    //     <summary className='cursor-pointer'>What is my fav. food.</summary>
    //     <span className='selection:bg-indigo-500 selection:text-white'>김치</span>
    //   </details>
    // </div>
    // list 의 새로운 속성들
    //  <div className='flex flex-col space-y-2 p-5'>
    //       <ul className='list-decimal marker:text-teal-500'>
    //         <li>hi</li>
    //         <li>hi</li>
    //         <li>hi</li>
    //       </ul>
    // </div>
    //중첩된 selector 와 상태
    // <div className='flex flex-col space-y-2 p-5'>
    //     <input type="file"className='file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-500'/>
    // </div>
  )
}

export default Home;