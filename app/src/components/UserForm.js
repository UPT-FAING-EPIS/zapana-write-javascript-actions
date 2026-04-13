function UserForm() {
  return (
    <section id="form" className="panel p-3 p-md-4">
      <h3 className="h4 text-primary mb-3">Create Task</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="taskName" className="form-label">
            Task name
          </label>
          <input id="taskName" type="text" className="form-control" placeholder="Sync dependencies" />
        </div>
        <div className="col-md-6">
          <label htmlFor="owner" className="form-label">
            Owner
          </label>
          <input id="owner" type="text" className="form-control" placeholder="Alex" />
        </div>
        <div className="col-md-6">
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <select id="priority" className="form-select" defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="dueDate" className="form-label">
            Due date
          </label>
          <input id="dueDate" type="date" className="form-control" />
        </div>
        <div className="col-12">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea id="notes" className="form-control" rows="3" placeholder="Add details..." />
        </div>
        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Save Task
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserForm;
