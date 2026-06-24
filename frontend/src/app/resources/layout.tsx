import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Resources | Financial Wisdom",
  description: "Explore financial planning articles, wealth distribution insights, and market updates from the Suasion Group team.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
