import Footer from "./components/Footer";
import { useState } from "react";
import initialTickets from "./data/tickets.json";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import TicketCard from "./components/TicketCard.jsx";
import TaskStatus from "./components/TaskStatus.jsx";

function App() {
  const [tickets, setTickets] = useState(Array.isArray(initialTickets) ? initialTickets : []);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [activeNav, setActiveNav] = useState("Home");
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [customer, setCustomer] = useState("");
  const [priority, setPriority] = useState("MEDIUM PRIORITY");

  const handleSelectTicket = (ticket) => {
    if (!ticket) return;
    const exists = inProgressTickets.some((item) => item.id === ticket.id);
    if (!exists) {
      setInProgressTickets((prev) => [...prev, ticket]);
    }
  };

  const handleCompleteTicket = (ticket) => {
    if (!ticket) return;
    setInProgressTickets((prev) => prev.filter((item) => item.id !== ticket.id));
    setResolvedTickets((prev) => [...prev, ticket]);
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const nextNumber =
      tickets.reduce((max, item) => {
        const num = Number(String(item.id || "").replace(/\D/g, ""));
        return Number.isFinite(num) && num > max ? num : max;
      }, 1000) + 1;

    const newTicket = {
      id: `#${nextNumber}`,
      title: title.trim(),
      description: description.trim(),
      customer: customer.trim() || "Guest User",
      priority,
      status: "Open",
      createdAt: new Date().toLocaleDateString("en-US"),
    };

    setTickets((prev) => [newTicket, ...prev]);
    setTitle("");
    setDescription("");
    setCustomer("");
    setPriority("MEDIUM PRIORITY");
    setIsNewTicketOpen(false);
    setActiveNav("Home");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar
        activeNav={activeNav}
        onSelectNav={(item) => {
          setActiveNav(item);
          setIsNewTicketOpen(false);
        }}
        onOpenNewTicket={() => setIsNewTicketOpen((prev) => !prev)}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Banner
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
        />

        {isNewTicketOpen && (
          <form
            onSubmit={handleCreateTicket}
            className="mt-6 rounded-lg border border-indigo-200 bg-white p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">Create New Ticket</h2>
              <button
                type="button"
                onClick={() => setIsNewTicketOpen(false)}
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Ticket title (e.g. Login Issue)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                required
              />
              <input
                type="text"
                placeholder="Customer name"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>

            <textarea
              rows={3}
              placeholder="Describe the issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              required
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="LOW PRIORITY">LOW PRIORITY</option>
                <option value="MEDIUM PRIORITY">MEDIUM PRIORITY</option>
                <option value="HIGH PRIORITY">HIGH PRIORITY</option>
              </select>

              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Add Ticket
              </button>
            </div>
          </form>
        )}

        {activeNav !== "Home" && (
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm">
            <strong>{activeNav}</strong> section opened.{" "}
            <button
              type="button"
              onClick={() => setActiveNav("Home")}
              className="ml-2 underline"
            >
              Back to Home
            </button>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onSelectTicket={handleSelectTicket}
              />
            ))}
          </div>

          <div>
            <TaskStatus
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onCompleteTicket={handleCompleteTicket}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;