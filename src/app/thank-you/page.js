import { WEB_URL } from "@/config/config";
import Link from "next/link";

export default function ThankYouPage(){
    return(
        <div className="thank_you_page">
            <div className="container">
                <h1 className="heading">Thank You!</h1>
                <p>Thank you for your submissions. We will contact you soon!</p>
                <Link href={WEB_URL} className="btn apply-btn1">Return to Homepage</Link>
            </div>
        </div>
    )
}