function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-xl p-8 sm:p-10 text-center text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-sm">
        <p className="text-lg sm:text-xl font-medium opacity-95">In-Progress</p>
        <p className="mt-2 text-4xl sm:text-5xl font-bold">{inProgressCount}</p>
      </div>

      <div className="rounded-xl p-8 sm:p-10 text-center text-white bg-gradient-to-r from-[#54CF68] to-[#00827A] shadow-sm">
        <p className="text-lg sm:text-xl font-medium opacity-95">Resolved</p>
        <p className="mt-2 text-4xl sm:text-5xl font-bold">{resolvedCount}</p>
      </div>
    </section>
  );
}

export default Banner;