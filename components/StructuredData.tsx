export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://apexcompensation.com",
        name: "Apex Compensation",
        url: "https://apexcompensation.com",
        logo: "https://apexcompensation.com/logo-transparent.png",
        description:
          "Premium sales compensation consulting for high-growth companies. Specializing in incentive plan design, quota strategy, and comp architecture for B2B organizations.",
        founder: {
          "@type": "Person",
          name: "Saxton Archer",
          jobTitle: "Principal Consultant, Sales Compensation",
          url: "https://www.linkedin.com/in/saxtonarcher",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Austin",
          addressRegion: "TX",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        email: "saxtonparcher@gmail.com",
        sameAs: ["https://www.linkedin.com/in/saxtonarcher"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sales Compensation Consulting Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Comp Diagnostic",
                description:
                  "A 2-3 week audit of your existing comp plan, quota structure, and payout history to surface gaps, misalignments, and a prioritized action list.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plan Design Sprint",
                description:
                  "A 4-6 week engagement to redesign your sales compensation plan from the ground up with custom quota modeling, accelerator structures, and implementation playbook.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Annual Comp Architecture",
                description:
                  "Embedded sales compensation leadership on retainer. Full annual plan design, quarterly reviews, new role modeling, and ongoing advisory access.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://apexcompensation.com/#website",
        url: "https://apexcompensation.com",
        name: "Apex Compensation",
        publisher: {
          "@id": "https://apexcompensation.com",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
