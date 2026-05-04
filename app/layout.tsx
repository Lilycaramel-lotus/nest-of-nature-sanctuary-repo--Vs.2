export const metadata = {
  title: "Your Site Title",
  description: "Your site description goes here."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
