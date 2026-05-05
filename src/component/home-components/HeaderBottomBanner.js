import Link from "next/link";
import React from "react";
// import "./headerBottomBanner.css";

const HeaderBottomBanner = () => {
    return (
        <div className="container">
            <div className="headerBottomBanner">
                <div className="headerBottomBanner__container">

                    <div className="headerBottomBanner__left">
                        <span className="headerBottomBanner__admission">
                            Admission 2026-27
                        </span>
                    </div>

                    <div className="headerBottomBanner__menu">
                        <Link href="admission#feestructure">Fee Structure</Link>
                        <span className="dot"></span>
                        <Link href="scholarship-and-eligibility">Scholarship & Eligibility</Link>
                        <span className="dot"></span>
                        <Link href="admission#admissionsofc">Admissions Office Contacts</Link>
                        <span className="dot"></span>
                        <Link href="admission-faq">FAQ'S</Link>
                    </div>

                    <div className="headerBottomBanner__actions">
                        <Link href="https://jss-university-frontend-sepia.vercel.app/apply-now" className="apply-btn1" rel="noopener noreferrer">Apply Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderBottomBanner;