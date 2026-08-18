// app/protected-files/page.js
import "@/styles/style.css";
import "@/styles/custom.style.css";
import "./protected.css";
import Link from "next/link";

async function getFiles() {
  const res = await fetch(`${process.env.LARAVEL_API_URL}/files`, {
    headers: {
      Authorization: `Bearer ${process.env.LARAVEL_SANCTUM_TOKEN}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch files");
  }

  return res.json();
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function FilePreview({ file }) {
  switch (file.type) {
    case "image":
      return (
        <div className="file-card-image">
          <img src={file.file_path} alt={file.name} className="w-100" />
        </div>
      );

    case "video":
      return (
        <div className="file-card-image file-card-video">
          <span className="icon pdf-icon" aria-hidden="true">
            Video File
          </span>
        </div>
      );

    case "pdf":
      return (
        <div className="file-card-image file-card-pdf">
          <span className="icon pdf-icon" aria-hidden="true">
            PDF File
          </span>
        </div>
      );

    default:
      return (
        <div className="file-card-image file-card-generic">
          <span className="icon file-icon" aria-hidden="true">
            File
          </span>
        </div>
      );
  }
}

export default async function ProtectedRoutePage() {
  let files = [];
  let fetchError = null;

  try {
    const raw = await getFiles();
    // point every file at our own proxy route, not Laravel directly
    files = raw.map((f) => ({ ...f, file_path: `/api/files/${f.id}` }));
  } catch (err) {
    fetchError = "Could not load files. Please try again later.";
  }

  return (
    <main className="protected-route-page">
      <section className="inner-title">
        <div className="container">
          <div className="innnr_head text-center">
            <h2 className="sub_heading">Protected Files</h2>
            <h3>Protected Files</h3>
          </div>
        </div>
      </section>

      <section className="protected-files-grid">
        <div className="container">
          {fetchError && <p className="text-center">{fetchError}</p>}
          {!fetchError && files.length === 0 && (
            <p className="text-center">No files found.</p>
          )}
          {!fetchError && files.length > 0 && (
            <div className="files-grid">
              {files.map((file) => (
                <div className="file-card" key={file.id}>
                  <FilePreview file={file} />
                  <div className="file-card-body">
                    <h5 className="file-title">{file.name}</h5>
                    <p className="file-date">{formatDate(file.created_at)}</p>
                    <p className="file-type">Type: {file.type}</p>
                    <Link
                      href={file.file_path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="file-link"
                    >
                      View File
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
