import { useState } from "react";
import initialTickets from "./data/tickets.json";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import TicketCard from "./components/TicketCard.jsx";
import TaskStatus from "./components/TaskStatus.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [tickets, setTickets] = useState(Array.isArray(initialTickets) ? initialTickets : []);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [activeNav, setActiveNav] = useState("Home");

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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar
        activeNav={activeNav}
        onSelectNav={(item) => setActiveNav(item)}
        onOpenNewTicket={() => setActiveNav("Home")}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Banner
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
        />

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