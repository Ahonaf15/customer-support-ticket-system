function TicketCard({ ticket, onSelectTicket }) {
  return (
    <div
      onClick={() => onSelectTicket(ticket)}
      className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-gray-900">{ticket.title}</h3>
        <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
          {ticket.status}
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-gray-600">{ticket.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>{ticket.id} • {ticket.customer}</span>
        <span>{ticket.priority}</span>
      </div>
      <div className="mt-2 text-xs text-gray-400">{ticket.createdAt}</div>
    </div>
  );
}

export default TicketCard;