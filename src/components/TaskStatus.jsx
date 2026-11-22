function TaskStatus({
  inProgressTickets = [],
  resolvedTickets = [],
  onCompleteTicket = () => {},
}) {
  return (
    <aside className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Task Status</h2>

        {inProgressTickets.length === 0 ? (
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-sm text-gray-500">
            Select a ticket from Customer Tickets to start working on it.
          </div>
        ) : (
          <div className="space-y-3">
            {inProgressTickets.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-xs"
              >
                <p className="font-medium text-gray-900 text-sm">{task.title}</p>
                <p className="text-xs text-gray-500 mt-1">{task.id}</p>
                <button
                  type="button"
                  onClick={() => onCompleteTicket(task)}
                  className="mt-3 w-full py-2 px-4 rounded-lg bg-[#02A53B] text-white text-sm font-medium cursor-pointer hover:opacity-95"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Resolved Task</h2>

        {resolvedTickets.length === 0 ? (
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-sm text-gray-500">
            No resolved tasks yet.
          </div>
        ) : (
          <div className="space-y-3">
            {resolvedTickets.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-xl p-4 border border-gray-200 text-sm text-gray-800"
              >
                {task.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default TaskStatus;