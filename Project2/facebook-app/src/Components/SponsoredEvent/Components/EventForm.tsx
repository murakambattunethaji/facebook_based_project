import { useState } from "react";
import UploadImage from './Upload Imagge.svg'; // Assuming this is the correct import for your upload icon

interface EventFormProps {
  eventName: string;
  setEventName: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  scheduleType: string;
  setScheduleType: (value: string) => void;
  mediaType: string;
  setMediaType: (value: string) => void;
  rootPoster1: string | null;
  setRootPoster1: (value: string | null) => void;
  rootPoster2: string | null;
  setRootPoster2: (value: string | null) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  termsImage: string | null;
  setTermsImage: (value: string | null) => void;
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isEditing: boolean;
}

const EventForm: React.FC<EventFormProps> = ({
  eventName,
  setEventName,
  country,
  setCountry,
  scheduleType,
  setScheduleType,
  mediaType,
  setMediaType,
  rootPoster1,
  setRootPoster1,
  rootPoster2,
  setRootPoster2,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  termsImage,
  setTermsImage,
  handleImageChange,
  onSubmit,
  onCancel,
  isEditing,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {/* Event Name */}
      <input
        type="text"
        placeholder="Event Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      {/* Country */}
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option>Select Country</option>
        <option>United States</option>
        <option>Canada</option>
        <option>United Kingdom</option>
        <option>Australia</option>
        <option>India</option>
        <option>Germany</option>
        <option>France</option>
        <option>Japan</option>
        <option>Brazil</option>
        <option>South Africa</option>
      </select>

      {/* Schedule Type */}
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={scheduleType}
        onChange={(e) => setScheduleType(e.target.value)}
      >
        <option>Select Schedule Type</option>
        <option>Create Into List</option>
        <option>Up Coming Event</option>
        <option>On-Going Event</option>
      </select>

      {/* Media Type */}
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={mediaType}
        onChange={(e) => setMediaType(e.target.value)}
      >
        <option>Video</option>
      </select>

      {/* Root Poster 1 */}
      <div className="mb-4">
        <label htmlFor="rootPoster1-upload" className="block text-sm font-medium text-gray-700">
          Posters Display in Root (1)
        </label>
        <input
          type="file"
          id="rootPoster1-upload"
          onChange={(e) => handleImageChange(e, setRootPoster1)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {rootPoster1 && <img src={rootPoster1} alt="Root Poster 1" className="mt-2 w-20 h-20 object-cover" />}
      </div>

      {/* Root Poster 2 */}
      <div className="mb-4">
        <label htmlFor="rootPoster2-upload" className="block text-sm font-medium text-gray-700">
          Posters Display in Root (2)
        </label>
        <input
          type="file"
          id="rootPoster2-upload"
          onChange={(e) => handleImageChange(e, setRootPoster2)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />  
        {rootPoster2 && <img src={rootPoster2} alt="Root Poster 2" className="mt-2 w-20 h-20 object-cover" />}
      </div>

      {/* Date Range */}
      <div className="mb-4 flex items-center space-x-2">
        <input
          type="datetime-local"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span className="text-gray-600">To</span>
        <input
          type="datetime-local"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Terms & Conditions Image */}
      <div className="mb-4">
        <label htmlFor="termsImage-upload" className="block text-sm font-medium text-gray-700">
          Terms & Conditions
        </label>
        <input
          type="file"
          id="termsImage-upload"
          onChange={(e) => handleImageChange(e, setTermsImage)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {termsImage && <img src={termsImage} alt="Terms & Conditions" className="mt-2 w-20 h-20 object-cover" />}
      </div>

      {/* Submit & Cancel */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-600 transition mb-2"
      >
        {isEditing ? "Update Event" : "Create Event"}
      </button>

      <button
        type="button"
        className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg shadow-md hover:bg-gray-400 transition"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default EventForm;