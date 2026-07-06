"use client"
import Link from "next/link";
import './error.css'

export default function Error({ error, reset }) {

  return (
    <main className="error_page">
      <div className="container">
        <div className="error_content">
          <h1>Oops!</h1>
          <h2>Something went wrong.</h2>

          <p>
            We're sorry, an unexpected error has occurred. Please try again or
            return to the homepage.
          </p>

          <div className="error_actions">
            <Link href="/" className="btn_home">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}