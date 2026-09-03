import { WEB_URL } from "@/config/config.mjs";
import { getPageSEO } from "@/lib/seo";
import Link from "next/link";

export async function generateMetadata() {
    return await getPageSEO(`thank-you`);
}

export default async function ThankYouPage() {
    const seoData = await getPageSEO(`thank-you`);
    return (
        <>
            {seoData?.schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(seoData.schema),
                    }}
                />
            )}
            <div className="thank_you_page">
                <div className="container">
                    <h1 className="heading">Thank You!</h1>
                    <p>Thank you for your submissions. We will contact you soon!</p>
                    <Link href={WEB_URL} className="btn apply-btn1">Return to Homepage</Link>
                </div>
            </div>
        </>

    )
}