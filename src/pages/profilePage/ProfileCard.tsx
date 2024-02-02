

const ProfileCard = () => {
  return (
    <div className=' w-[200px] h-[240px]  flex flex-col items-center justify-center space-y-3 shadow-xl'>
      <div className=" bg-red-100 w-[110px] h-[110px] rounded-full flex items-center justify-center ">
        <img className=' bg-blue-400 rounded-full w-[100px] h-[100px]' src="" alt="" />
      </div>
      <div className=" flex items-center gap-1  flex-col">
        <h1 className=' font-bold text-lg'>Simon Adjei </h1>
        <p className=' text-sm'>Fullstack Engineer</p>
        <div className=" flex items-center gap-1">
            <p className=' text-blue-300 text-lg'>✔</p>
            <p className=' text-sm'>KNUST, Ghana </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
