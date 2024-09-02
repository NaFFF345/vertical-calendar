export default function VerticalCalendar(props: { length: number, startDate: Date }) {
  const timeArray = Array(24).fill(0).map((_, i) => {
    return (
      <div className='border-bottom border-solid border-gray-200 min-h-10 border-b-2'>
        {i < 13 ? `午前${i}時` : `午後${i - 12}時`}
      </div>
    )
  })
  const scopeDate = (dateLength: number, startDate: Date) => {
    const startUnix = Math.floor(startDate.getTime() / 1000)
    const lengthSecond = 60 * 60 * 24 // lengthの秒数
    return Array(dateLength).fill(0).map((_, i) => {
      return new Date((startUnix + lengthSecond * i) * 1000)
    })
  }
  const dateArray = scopeDate(props.length, new Date())
  console.log(dateArray)

  const weekArray = Array(props.length).fill(0).map((_, i) => {
    const localeDay = ['日', '月', '火', '水', '木', '金', '土']
    return <div className='min-w-12 border-gray-200 border-r-2 border-b-2 text-center flex-grow -z-20 '>
      <p>{dateArray[i].getDate()}</p>
      <p>{localeDay[dateArray[i].getDay()]}</p>
    </div>
  })

  const schedulesArea = Array(props.length).fill(0).map((_, i) => {
    return <div className='min-w-12 border-gray-200 border-r-2 shrink flex-grow z-20' draggable={false}
      onMouseUp={(e) => console.log(e.clientY)}
      onMouseDown={(e) => console.log(e.clientX, e.target)}>{i}</div>
  })

  const timeAuxiliaryLine = Array(24).fill(0).map(() => {
    return (
      <div draggable={false} className="after:content-[''] after:border-gray-100 after:border-b-2 after:w-full after:min-h-10 after:block">
      </div>
    )
  })



  return (
    <>
      <h1 className='text-cyan-700 text-2xl mt-2'>Calendar</h1>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row w-full'>
          <div className='min-w-[100px] max-w-[150px]'>GMT +9:00</div>
          {weekArray}
        </div>

        <div className='flex w-full min-h-screen h-fit'>
          <div className='flex grow w-full'>
            <div className='h-fit min-w-[100px] max-w-[150px] calendar-time-disp text-sm'>
              {/* <div className='calendar--time-zone min-h-10 inline-flex items-end border-b-2'>GMT +9:00</div> */}
              {timeArray}
            </div>
            <div className='flex grow w-full relative'>
              {schedulesArea}
              <section className='time-divider block absolute w-full'>
                {timeAuxiliaryLine}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
