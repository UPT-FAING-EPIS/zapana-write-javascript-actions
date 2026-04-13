function DashboardTable({ rows }) {
  return (
    <section id="dashboard" className="panel p-3 p-md-4">
      <h3 className="h4 mb-3 text-primary">Services Overview</h3>
      <div className="table-responsive table-zap">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Owner</th>
              <th scope="col" className="text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <span
                    className={`badge ${
                      item.status === "Active"
                        ? "text-bg-success"
                        : item.status === "Pending"
                          ? "text-bg-warning"
                          : "text-bg-secondary"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.owner}</td>
                <td className="text-end">
                  <button type="button" className="btn btn-sm btn-outline-primary">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DashboardTable;
