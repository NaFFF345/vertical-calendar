export default function VerticalCalendar() {
  const displayDayLength = 6
  const timeArray = Array(24).fill(0).map((_, i) => {
    return (
      <div className='border-bottom border-solid border-gray-200 min-h-10 border-b-2'>
        {i < 13 ? `午前${i}時` : `午後${i - 12}時`}
      </div>
    )
  })

  const weekArray = Array(displayDayLength).fill(0).map((_, i) => {
    return <div className='min-w-12 border-gray-200 border-r-2 border-b-2 text-center flex-grow'>{i}</div>
  })

  const schedulesArea = Array(displayDayLength).fill(0).map((_, i) => {
    return <div className='min-w-12 border-gray-200 border-r-2 shrink flex-grow'>{i}</div>
  })

  const timeAuxiliaryLine = Array(24).fill(0).map(() => {
    return (
      <div className="after:content-[''] after:border-gray-100 after:border-b-2 after:w-full after:min-h-10 after:block">
      </div>
    )
  })

  const dataRangeCalculator = (dateLength: number, startDate: Date) => {
    const startUnix = Math.floor(startDate.getTime() / 1000)
    const lengthSecond = 60 * 60 * 24 * dateLength // lengthの秒数
    return new Date((startUnix + lengthSecond) * 1000)
  }

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
