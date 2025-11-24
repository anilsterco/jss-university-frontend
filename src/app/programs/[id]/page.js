"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/custom.style.css";
import "@/styles/style.css";

// Move programsData outside the component
const programsData = {
  "computer-science-engineering": {
    id: 1,
    title: "B.Tech Computer Science & Engineering",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },

  "electrical-engineering": {
    id: 2,
    title: "B.Tech Electrical Engineering",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },

  "mechanical-engineering": {
    id: 3,
    title: "B.Tech Mechanical Engineering",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },

  "electronics-communication": {
    id: 4,
    title: "B.Tech Electronics & Communication Engineering",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },

  "civil-engineering": {
    id: 5,
    title: "B.Tech Civil Engineering",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },

  "business-administration": {
    id: 6,
    title: "MBA Business Administration",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },

  "computer-applications": {
    id: 7,
    title: "MCA Computer Applications",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },

  "pharmaceutical-sciences": {
    id: 8,
    title: "B.Pharma Pharmaceutical Sciences",
    image: "/images/custom-page/product-detail-top-banner.webp",
    admissionYear: "2025-26",
    overview: {
      description:
        "Our B.Tech in Computer Science & Engineering program equips students with cutting-edge technical skills and problem-solving abilities to thrive in the dynamic tech industry.",
      details:
        "The curriculum blends theoretical foundations with hands-on experience through industry projects, hackathons, and research opportunities. Students gain expertise in AI, machine learning, cloud computing, and software development.",
      duration: "4 Years (8 Semesters)",
      fees: "₹1,45,000 per annum",
    },
    eligibility: {
      image: "/images/custom-page/detail-eligiblity-banner.png",
      marks: "75% MARKS",
      description:
        "Candidates must have studied Physics, Chemistry, and Mathematics in 10+2 with minimum 75% aggregate.",
      jeeSeats: "60%",
      jeeDescription:
        "of total seats are filled through JEE (Main) 2025 All India Rank (CRL).",
      remainingSeats:
        "40% seats are filled through 10+2 Examination PCM Percentage.",
      vacantSeats:
        "Vacant seats are inter-transferable between the categories.",
    },
    educationalObjectives: {
      peos: [
        {
          title: "PEO - 1",
          description:
            "To develop professionals capable of analyzing, designing and implementing software solutions for complex engineering problems.",
        },
        {
          title: "PEO - 2",
          description:
            "To inculcate research aptitude and innovation in emerging areas of computer science and information technology.",
        },
        {
          title: "PEO - 3",
          description:
            "To foster ethical practices and leadership qualities for successful career growth and societal contribution.",
        },
        {
          title: "PEO - 4",
          description:
            "To promote lifelong learning and adaptability to rapidly evolving technologies in computing field.",
        },
      ],
      pos: [
        {
          title: "PO - 1",
          description:
            "Engineering knowledge: Apply knowledge of mathematics, science, engineering fundamentals to solve complex computing problems.",
        },
        {
          title: "PO - 2",
          description:
            "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems.",
        },
        {
          title: "PO - 3",
          description:
            "Design/development of solutions: Design solutions for complex engineering problems and design system components.",
        },
        {
          title: "PO - 4",
          description:
            "Conduct investigations: Use research-based knowledge to provide valid conclusions.",
        },
      ],
    },
    curriculum: {
      title:
        "Comprehensive curriculum covering cutting-edge technologies and fundamental computer science concepts.",
      coreSubjects:
        "Core subjects include Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Artificial Intelligence, Machine Learning, Cloud Computing, and Software Engineering. Advanced topics include Blockchain, IoT, Cybersecurity, and Big Data Analytics.",
      image: "/images/custom-page/ciruclum-img.webp",
    },
    feeStructure: {
      description:
        "The fee structure is designed to provide quality education with state-of-the-art infrastructure and industry exposure.",
      totalFees: "₹5,80,000 /-",
      image: "/images/custom-page/fee-structure-img.png",
      year: "for complete program (2024-2028)",
      breakdown: [
        "Tuition Fee: ₹4,80,000",
        "Laboratory Fee: ₹60,000",
        "Development Fee: ₹40,000",
      ],
    },
    placement: {
      percentage: "96%",
      description: "placement record in 2023",
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹42 LPA",
      testimonial: {
        name: "PRIYA SHARMA",
        course: "B.Tech in Computer Science & Engineering",
        batch: "Batch 2019-2023",
        position: "Software Development Engineer at Amazon",
        image: "/images/custom-page/placement-testimonial-banner.webp",
        quote:
          "The strong foundation in DSA and hands-on projects helped me crack product-based companies.",
      },
      recruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Goldman Sachs"],
    },
    careerOpportunities: {
      title: "DIVERSE CAREER PATHWAYS IN TECHNOLOGY",
      image: "/images/custom-page/detail-bottom-banner.png",
      description:
        "Graduates can pursue roles in software development, data science, AI/ML engineering, and research across various industries.",
      opportunities: [
        "Software Development Engineer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Cloud Solutions Architect",
        "DevOps Engineer",
        "Full Stack Developer",
      ],
    },
  },
};
const BASE_URL = "https://project-demo.in/jss/api";

export default function ProgramDetail({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  const [activeTab, setActiveTab] = useState("tab1");
  const [programData, setProgramData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProgramData = async () => {
  //     try {
  //       setLoading(true);

  //       // Use the programsData object to get data based on ID
  //       const data = programsData[id] || null;

  //       // Simulate API delay
  //       setTimeout(() => {
  //         setProgramData(data);
  //         setLoading(false);
  //       }, 300);
  //     } catch (error) {
  //       console.error("Error fetching program data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   if (id) {
  //     fetchProgramData();
  //   }
  // }, [id]);

  useEffect(() => {
    fetch(`${BASE_URL}/course/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProgramData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  if (loading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "18px",
          color: "#666",
        }}
      >
        <div>Loading program details...</div>
      </div>
    );
  }

  if (!programData) {
    return (
      <div
        className="error-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <div
          style={{ fontSize: "24px", marginBottom: "20px", color: "#d32f2f" }}
        >
          Program not found
        </div>
        <Link href="/programs" className="apply-btn1">
          Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <main className="site_main">
      {/* Program Detail Hero Section */}
      <section className="program-detail">
        <div className="program-detail-img">
          <figure>
            <Image
              src={programData.banner}
              alt="program"
              width={1200}
              height={600}
              className="img-fluid w-100"
            />
            <figcaption>
              <div className="program-detail-text">
                <div className="innnr_head">
                  <h2>PROGRAMS</h2>
                  <h3>{programData.name}</h3>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Admission Open Section */}
      <section className="admission-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="admission-box">
                <div className="admission-box-text">
                  <p>Admission Open for</p>
                  <h2>{programData.admissionYear}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="over-view-box">
                <div className="overview-text">
                  <h5>Overview</h5>
                  <h6>{programData.overview_title}</h6>
                  <p>{programData.overview_desc}</p>
                </div>
                <div className="overview-duration">
                  <div className="overview-duration-text">
                    <span>Course duration</span>
                    <p>{programData.course_duration}</p>
                  </div>
                  <div className="fees">
                    <span>Annual Fees</span>
                    <p>{programData.annual_fees}</p>
                  </div>
                  <div className="structure-btns">
                    <a
                      href={programData.program_structure}
                      className="structure-btn"
                    >
                      <Image
                        src="/images/custom-page/blue-pdf.png"
                        alt="PDF"
                        width={20}
                        height={20}
                        className="img-fluid"
                      />
                      Programme Structure
                    </a>
                    <a href={programData.scholarship} className="structure-btn">
                      <Image
                        src="/images/custom-page/scholer-icon.png"
                        alt="PDF"
                        width={20}
                        height={20}
                        className="img-fluid"
                      />
                      Scholarship
                    </a>
                  </div>
                  <a
                    href={programData.apply_now_link}
                    target="_blank"
                    className="apply-btn1"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-sec" id="eligibilitySec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="eligibility-img">
                <figure>
                  {programData.overview_image && (
                    <Image
                      src={programData.overview_image}
                      alt="program"
                      width={1200}
                      height={400}
                      className="img-fluid w-100"
                    />
                  )}

                  <figcaption>
                    <div className="eligibility-box">
                      <div className="eligibility-text">
                        <span>Eligibility Criteria</span>
                        <h3>{programData.eligibility_marks}</h3>
                        <p>{programData.eligibility_desc}</p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="rank-box">
                <h6>Eligibility Criteria</h6>
                <div className="rank-text">
                  <div className="left-rank-text">
                    <h2>{programData.eligibility_criteria}</h2>
                  </div>
                  <div className="right-rank-text">
                    <p>{programData.eligibility_criteria_desc}</p>
                  </div>
                </div>
                <div className="seats">
                  {programData.eligibility_criteria_notices && (
                    <>
                      <div className="seats-left-text">
                        <p>{programData.eligibility_criteria_notices[0]}</p>
                      </div>
                      <div className="seats-right-text">
                        <p>{programData.eligibility_criteria_notices[1]}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Objectives Section */}
      <section className="educational-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="educational-box">
                <article className="tabbed-content">
                  <nav className="tabs">
                    <ul>
                      <li>
                        <a
                          href="#tab1"
                          className={activeTab === "tab1" ? "active" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick("tab1");
                          }}
                        >
                          Program Educational Objectives (PEOs)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tab2"
                          className={activeTab === "tab2" ? "active" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick("tab2");
                          }}
                        >
                          Program Outcomes (POs)
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div
                    id="tab1"
                    className={`item ${activeTab === "tab1" ? "active" : ""}`}
                    data-title="Program Educational Objectives (PEOs)"
                  >
                    <div className="item-content">
                      <div className="peo-list">
                        {programData.peos &&
                          programData.peos.map((peo, index) => (
                            <div key={index} className="peo-box">
                              <h3>PEO - {index + 1}</h3>
                              <p>{peo}</p>
                            </div>
                          ))}
                      </div>
                      <a
                        href={programData.apply_now_link}
                        className="apply-btn1"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  <div
                    id="tab2"
                    className={`item ${activeTab === "tab2" ? "active" : ""}`}
                    data-title="Program Outcomes (POs)"
                  >
                    <div className="item-content">
                      <div className="peo-list">
                        {programData.pos &&
                          programData.pos.map((po, index) => (
                            <div key={index} className="peo-box">
                              <h3>PO - {index + 1}</h3>
                              <p>{po}</p>
                            </div>
                          ))}
                      </div>
                      <a
                        href={programData.apply_now_link}
                        className="apply-btn1"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="core-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="core-box">
                <div className="core-text">
                  <span>Curriculum</span>
                  <h6>{programData.curriculum_title}</h6>
                  <blockquote>Core Subjects:</blockquote>
                  <p>
                    {programData.curriculum_desc &&
                      programData.curriculum_desc[0]}
                  </p>
                  <div className="core-pdf">
                    <a href={programData.curriculum_pdf} target="_blank">
                      <Image
                        src="/images/custom-page/red-pdf-icon.png"
                        alt="PDF"
                        width={20}
                        height={20}
                        className="img-fluid"
                      />
                      Download PDF
                    </a>
                  </div>
                </div>
                <div className="core-img">
                  <figure>
                    {programData.curriculum_image && (
                      <Image
                        src={programData.curriculum_image}
                        alt="program"
                        width={500}
                        height={300}
                        className="img-fluid w-100"
                      />
                    )}
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="program-sec-six">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="structure">
                <span>Fee Structure</span>
                <p>{programData.fee_structure_title}</p>
              </div>
              <div className="structure-box">
                <div className="structure-img">
                  <figure>
                    {programData.fee_structure_image && (
                      <Image
                        src={programData.fee_structure_image}
                        alt="program"
                        width={500}
                        height={300}
                        className="img-fluid w-100"
                      />
                    )}
                  </figure>
                </div>
                <div className="structure-text">
                  <p>The Total Fees for {programData.name} at JSS Noida is</p>
                  <h2>{programData.course_total_fees}</h2>
                  <span>{programData.academic_year}</span>
                  <div className="engineering-btn">
                    <a href={programData.apply_now_link} className="apply-btn1">
                      Apply Now
                    </a>
                    <a
                      href={programData.fee_structure_pdf}
                      target="_blank"
                      className="structure-btn"
                    >
                      <Image
                        src={"/images/custom-page/red-pdf-icon.png"}
                        alt="PDF"
                        width={20}
                        height={20}
                        className="img-fluid"
                      />
                      DOWNLOAD
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Testimonial Section */}
      {/* <section className="program-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="program-testimonial-box">
                <div className="testimonial-box">
                  <div className="testimonial-text">
                    <span>Placement Testimonial</span>
                    <p>Empowering Minds Through World-Class Education</p>
                  </div>
                  <div className="across">
                    <h2>{programData.placement.percentage}</h2>
                    <p>{programData.placement.description}</p>
                    <a href="#" className="apply-btn1">
                      Apply Now
                    </a>
                  </div>
                </div>
                <div className="testimonial-img">
                  <div className="testimonial-img-box">
                    <figure>
                      <Image
                        src={programData.placement.testimonial.image}
                        alt="program"
                        width={400}
                        height={500}
                        className="img-fluid w-100"
                      />
                      <figcaption>
                        <div className="testimonial-img-text">
                          <h4>{programData.placement.testimonial.name}</h4>
                          <p>
                            {programData.placement.testimonial.course}{" "}
                            <span>.</span>{" "}
                            {programData.placement.testimonial.batch}
                          </p>
                          <blockquote>
                            {programData.placement.testimonial.position}
                          </blockquote>
                        </div>
                        <a href="#" className="streched_link"></a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Career Opportunities Section */}
      <section className="opportunitie-sec">
        <div className="opportunitie-img">
          <figure>
            {programData.career_image && <Image
              src={programData.career_image}
              alt="program"
              width={1200}
              height={600}
              className="img-fluid w-100"
            />}
            
          </figure>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="opportunitie-box">
                <div className="opportunitie-text">
                  <blockquote>CAREER OPPORTUNITIES</blockquote>
                  <h2>{programData.curriculum_title}</h2>
                  <p>{programData.career_desc}</p>
                </div>
                <div className="opportunitie-tab">
                  <ul>
                    {programData.useful_links &&
                      JSON.parse(programData.useful_links).map(
                        (opportunity, index) => (
                          <li key={index}>
                            <a href={opportunity.url}>{opportunity.text}</a>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
