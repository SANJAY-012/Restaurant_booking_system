"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BookingData {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}

const BookingSystem = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    date: "",
    time: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
  });

  const [timeSlots] = useState([
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!bookingData.date) return "Please select a date";
    if (!bookingData.time) return "Please select a time";
    if (!bookingData.name) return "Please enter your name";
    if (!bookingData.email) return "Please enter your email";
    if (!bookingData.phone) return "Please enter your phone number";
    return "";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setShowConfirmation(true);
  };

  // Rest of the component remains the same...
  if (showConfirmation) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white animate-fade-in">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-white">
            Booking Confirmed!
          </CardTitle>
          <CardDescription className="text-lg">
            Thank you for your reservation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Name:</strong> {bookingData.name}
            </p>
            <p className="text-lg">
              <strong>Date:</strong> {bookingData.date}
            </p>
            <p className="text-lg">
              <strong>Time:</strong> {bookingData.time}
            </p>
            <p className="text-lg">
              <strong>Guests:</strong> {bookingData.guests}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => setShowConfirmation(false)}
            className="bg-white text-blue-600 hover:bg-gray-100 transition"
          >
            Make Another Booking
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-pink-500 to-yellow-500 text-white p-6 shadow-xl rounded-lg animate-slide-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-3xl font-bold">
          <Calendar className="h-8 w-8" />
          Restaurant Booking
        </CardTitle>
        <CardDescription className="text-lg">
          Book your table with us
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive" className="animate-pulse">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Time</label>
              <select
                name="time"
                value={bookingData.time}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 bg-white text-gray-800"
              >
                <option value="">Select time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Number of Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                max="10"
                value={bookingData.guests}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white"
          >
            Book Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingSystem;
