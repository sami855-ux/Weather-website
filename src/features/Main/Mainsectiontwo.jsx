const Mainsectiontwo = () => {
  return (
    <div className="w-full">
      <h2 className="pl-3 mb-2 text-2xl font-bold">Today&apos;s Highlights</h2>
      <MainHighlight />
      <div className="flex flex-wrap w-full gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

const MainHighlight = () => {
  return (
    <div className="flex w-full h-64 gap-4 mb-3">
      <section className="w-[50%] h-full rounded-lg bg-[#2d2d32]"></section>
      <section className="w-[50%] h-full rounded-lg bg-[#2d2d32]"></section>
    </div>
  )
}

const Card = () => {
  return <div className="w-[265px] h-32 bg-[#2d2d32] rounded-lg"></div>
}

export default Mainsectiontwo
