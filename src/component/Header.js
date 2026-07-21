// Header.jsx  (NO "use client" — this is a Server Component)
import HeaderClient from "./HeaderClient";
import "./header.css";

export default function Header({
  initialNavLinks = [],
  initialAdmissionData = null,
  initialEngineeringData = [],
  initialMegaMenuData = [],
}) {
  return (
    <HeaderClient
      initialNavLinks={initialNavLinks}
      initialAdmissionData={initialAdmissionData}
      initialEngineeringData={initialEngineeringData}
      initialMegaMenuData={initialMegaMenuData}
    />
  );
}