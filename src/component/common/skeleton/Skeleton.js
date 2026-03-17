import "./skeleton.css";

export function Skeleton({ width = "100%", height = "100%" }) {
  return <div className="skeleton" style={{ width, height }}></div>;
}
