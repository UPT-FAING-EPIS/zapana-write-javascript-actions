function InfoCard() {
  return (
    <article className="card panel h-100">
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h4 text-primary">Weekly Goal</h3>
        <p className="card-text text-secondary mb-4">
          Keep all service checks green and maintain a stable release window for every integration.
        </p>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Builds
            <span className="badge text-bg-success">12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Alerts
            <span className="badge text-bg-warning">3</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Reviews
            <span className="badge text-bg-primary">8</span>
          </li>
        </ul>
        <a href="#resources" className="btn btn-primary mt-auto">
          Go to resources
        </a>
      </div>
    </article>
  );
}

export default InfoCard;
