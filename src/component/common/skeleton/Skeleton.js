import "./skeleton.css";

export function Skeleton({ width = "100%", height = "100%", className }) {
  return <div className={`skeleton ${className}`} style={{ width, height }}></div>;
}
