
import FacilitiesClient from "./FacilitiesClient";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilitiesPage() {
  
  return (
    <main className="site_main">
      <h1 style={{
        display:'none'
      }}>Facilities</h1>
      <FacilitiesClient />
    </main>
  );
}
