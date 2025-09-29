export default function Footer() {
  return (
    <footer style={{ marginTop: "50px", padding: "20px", borderTop: "1px solid #ccc", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
}
