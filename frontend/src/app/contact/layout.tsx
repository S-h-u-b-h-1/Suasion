import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Financial Consultation",
  description: "Schedule a wealth advisory discussion or financial query with Suasion Group at our Kolkata office or virtually.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
