function GenderPanel() {
    return (
        <div className="w-[10%] h-fit flex flex-col justify-center border-2 p-1 rounded-[.5rem]">
          <section className="flex justify-between">
            <p>Female</p>
            <p>100</p>
          </section>
          <section className="flex justify-between">
            <p>Male</p>
            <p>100</p>
          </section>
          <section className="flex justify-between">
            <p>Total</p>
            <p>100</p>
          </section>
        </div>
    )
}

function GradeLevelPanel() {
    return (
        <div>
            
        </div>
    )
}

export {
    GenderPanel,
}