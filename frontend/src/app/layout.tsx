import './globals.css';

export const metadata = {
  title: 'Restaurant Booking System',
  description: 'Book your table with us!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children} {/* Only render the page content */}
      </body>
    </html>
  );
}
