function ResourceLinks() {
  return (
    <section id="resources" className="panel p-3 p-md-4">
      <h3 className="h4 text-primary mb-3">Helpful Links</h3>
      <div className="list-group mb-3">
        <a
          className="list-group-item list-group-item-action quick-link"
          href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
          target="_blank"
          rel="noreferrer"
        >
          Bootstrap Documentation
        </a>
        <a
          className="list-group-item list-group-item-action quick-link"
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
        >
          React Documentation
        </a>
        <a
          className="list-group-item list-group-item-action quick-link"
          href="https://vite.dev/guide/"
          target="_blank"
          rel="noreferrer"
        >
          Vite Guide
        </a>
      </div>
      <a id="report" href="#dashboard" className="btn btn-outline-primary">
        Back to dashboard
      </a>
    </section>
  );
}

export default ResourceLinks;
