import { useState } from "react";
import NavigationMenu from "./components/NavigationMenu.js";
import DashboardTable from "./components/DashboardTable.js";
import UserForm from "./components/UserForm.js";
import InfoCard from "./components/InfoCard.js";
import ResourceLinks from "./components/ResourceLinks.js";
import DetailsModal from "./components/DetailsModal.js";

const sampleData = [
  { id: 101, name: "Request API", status: "Active", owner: "Ana" },
  { id: 102, name: "Joke Service", status: "Pending", owner: "Luis" },
  { id: 103, name: "Build Pipeline", status: "Active", owner: "Mar" },
  { id: 104, name: "Deploy Worker", status: "Paused", owner: "Diego" },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-shell">
      <NavigationMenu />

      <main className="container py-4 py-md-5">
        <header className="mb-4 mb-md-5 text-center text-md-start">
          <h1 className="display-5 fw-bold text-primary mb-2">Project Control Center</h1>
          <h2 className="h4 text-secondary fw-normal mb-3">Bootstrap-consistent UI components</h2>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => setShowModal(true)}
          >
            Open Project Summary
          </button>
        </header>

        <section className="row g-4">
          <div className="col-12 col-xl-8">
            <DashboardTable rows={sampleData} />
          </div>
          <div className="col-12 col-xl-4">
            <InfoCard />
          </div>
        </section>

        <section className="row g-4 mt-1">
          <div className="col-12 col-lg-7">
            <UserForm />
          </div>
          <div className="col-12 col-lg-5">
            <ResourceLinks />
          </div>
        </section>
      </main>

      <DetailsModal show={showModal} onClose={() => setShowModal(false)} data={sampleData} />
    </div>
  );
}

export default App;
