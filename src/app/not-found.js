import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page_404">
      <style>
        {`
        .page_404 {
          padding: 40px 0;
          background: #fff;
          font-family: 'Arvo', serif;
          text-align: center;
        }

        .four_zero_four_bg {
          background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
          height: 600px;
          background-position: center;
          background-size: cover;
        }

        .four_zero_four_bg h1 {
          font-size: 80px;
        }

        .contant_box_404 {
          margin-top: -50px;
        }

        .link_404 {
          color: #fff !important;
          padding: 10px 20px;
          background: #39ac31;
          margin: 20px 0;
          display: inline-block;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }
      `}
      </style>

      <div className="container">
        <div className="four_zero_four_bg">
          <h1>404 Page Not Found</h1>
        </div>

        <div className="contant_box_404">
          <h3>Looks like you're lost</h3>
          <p>The page you are looking for is not available!</p>

          <Link href="/" className="link_404">Go to Home</Link>
        </div>
      </div>
    </section>
  );
}
