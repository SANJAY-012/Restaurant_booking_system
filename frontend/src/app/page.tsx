import BookingSystem from '@/components/BookingSystem';

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Our Restaurant</h1>
        <p className="text-gray-600">Book your table with us and enjoy a wonderful dining experience.</p>
      </div>
      <div className="container mx-auto">
        <BookingSystem /> {/* Keep it here for the homepage */}
      </div>
    </main>
  );
}

