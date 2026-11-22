function Navbar({ activeNav = "Home", onSelectNav = () => {}, onOpenNewTicket = () => {} }) {
  const navItems = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <button
          type="button"
          onClick={() => onSelectNav("Home")}
          className="text-lg font-bold text-gray-900"
        >
          CS — Ticket System
        </button>

        <nav className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onSelectNav(item)}
              className={`cursor-pointer transition hover:text-blue-600 ${
                activeNav === item ? "font-semibold text-blue-600" : ""
              }`}
            >
              {item}
            </button>
          ))}

          <button
            type="button"
            onClick={onOpenNewTicket}
            className="cursor-pointer rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
          >
            + New Ticket
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;