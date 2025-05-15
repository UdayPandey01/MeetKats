import { useState } from 'react';
import { Calendar, Clock, MapPin, Tag, Image, ChevronLeft, Upload, X, Plus } from 'lucide-react';

export default function CreateEventPage() {
  const [activeStep, setActiveStep] = useState(0);

  const [eventData, setEventData] = useState<EventData>({
    title: '',
    description: '',
    category: '',
    tags: [],
    startDate: '',
    endDate: '',
    time: '',
    duration: '4h 30m',
    location: '',
    files: [
      { name: 'Banner-01.jpg', selected: true },
      { name: 'Booking.jpg', selected: true },
      { name: 'Rules & Guidelines.jpg', selected: true }
    ]
  });
  const [currentTag, setCurrentTag] = useState('');

  const steps = [
    { id: 0, name: 'Details' },
    { id: 1, name: 'Date & Time' },
    { id: 2, name: 'Location' },
    { id: 3, name: 'Upload' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const addTag = () => {
    if (currentTag.trim() !== '') {
      setEventData({ ...eventData, tags: [...eventData.tags, currentTag.trim()] });
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setEventData({
      ...eventData,
      tags: eventData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const toggleFileSelection = (fileName) => {
    setEventData({
      ...eventData,
      files: eventData.files.map(file => 
        file.name === fileName ? { ...file, selected: !file.selected } : file
      )
    });
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const categories = [
    "Conference", "Workshop", "Seminar", "Party", "Meeting", 
    "Class", "Concert", "Exhibition", "Other"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            className="text-blue-600 flex items-center hover:text-blue-800 transition"
            onClick={() => console.log('Back clicked')}
          >
            <ChevronLeft size={20} />
            <span className="ml-1">BACK</span>
          </button>
          <h1 className="text-2xl font-semibold ml-4 text-gray-800">Create event</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center w-full"
              >
                <div className="relative flex items-center justify-center w-full">
                  <div 
                    className={`w-full h-1 ${
                      index === 0 ? 'hidden' : index <= activeStep ? 'bg-blue-500' : 'bg-gray-200'
                    }`} 
                  />
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      index <= activeStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {index < activeStep ? '✓' : index + 1}
                  </div>
                  <div 
                    className={`w-full h-1 ${
                      index === steps.length - 1 ? 'hidden' : index < activeStep ? 'bg-blue-500' : 'bg-gray-200'
                    }`} 
                  />
                </div>
                <span 
                  className={`mt-2 text-sm ${
                    index === activeStep ? 'text-blue-500 font-medium' : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Details Step */}
          <div className={activeStep === 0 ? 'block' : 'hidden'}>
            <h2 className="text-lg font-medium mb-6">Event Details</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter event name"
                value={eventData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Add a description to encourage guests to attend to your event. Links, emojis and new lines are supported."
                value={eventData.description}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={eventData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-md">
                  {eventData.tags.map((tag, index) => (
                    <div 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md flex items-center"
                    >
                      <span>{tag}</span>
                      <button 
                        type="button" 
                        className="ml-1 text-blue-800 hover:text-blue-900"
                        onClick={() => removeTag(tag)}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                  <div className="flex-1">
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      placeholder="e.g., conference, technology (press Enter to add)"
                      className="w-full border-none focus:ring-0 text-sm p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date & Time Step */}
          <div className={activeStep === 1 ? 'block' : 'hidden'}>
            <h2 className="text-lg font-medium mb-6">Date & Time</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Range <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value="May 15, 2025 - May 21, 2025"
                    readOnly
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="time"
                    value={eventData.time || "02:00 PM"}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <select
                name="duration"
                value={eventData.duration}
                onChange={handleInputChange}
                className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="30m">30 minutes</option>
                <option value="1h">1 hour</option>
                <option value="1h 30m">1 hour 30 minutes</option>
                <option value="2h">2 hours</option>
                <option value="3h">3 hours</option>
                <option value="4h">4 hours</option>
                <option value="4h 30m">4 hours 30 minutes</option>
                <option value="5h">5 hours</option>
                <option value="6h">6 hours</option>
                <option value="All day">All day</option>
              </select>
            </div>
          </div>

          {/* Location Step */}
          <div className={activeStep === 2 ? 'block' : 'hidden'}>
            <h2 className="text-lg font-medium mb-6">Location</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="Physical address or virtual meeting link"
                  value={eventData.location || "www.googlemeet.com/xyz-uvw-abc"}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Location Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-white border border-gray-200 hover:border-blue-500 rounded-md p-3 text-left transition">
                  <div className="font-medium">In Person</div>
                  <div className="text-xs text-gray-500">Physical venue</div>
                </button>
                <button className="bg-white border border-blue-500 shadow-sm rounded-md p-3 text-left transition">
                  <div className="font-medium text-blue-700">Virtual</div>
                  <div className="text-xs text-gray-500">Online meeting</div>
                </button>
                <button className="bg-white border border-gray-200 hover:border-blue-500 rounded-md p-3 text-left transition">
                  <div className="font-medium">Hybrid</div>
                  <div className="text-xs text-gray-500">In-person & virtual</div>
                </button>
              </div>
            </div>
          </div>

          {/* Upload Step */}
          <div className={activeStep === 3 ? 'block' : 'hidden'}>
            <h2 className="text-lg font-medium mb-6">Upload Event Materials</h2>
            
            <div className="mb-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="mx-auto flex justify-center mb-4">
                  <Upload size={36} className="text-gray-400" />
                </div>
                <h3 className="text-gray-700 font-medium mb-2">Drag and drop files here</h3>
                <p className="text-gray-500 text-sm mb-4">or</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                  Select files
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Selected Files</h3>
              
              <ul className="space-y-2">
                {eventData.files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-50 rounded-md p-3 border border-gray-200">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={file.selected}
                        onChange={() => toggleFileSelection(file.name)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <Image size={16} className="ml-3 text-gray-400" />
                      <span className="ml-2 text-sm">{file.name}</span>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={handlePrevStep}
              className={`px-6 py-2 text-sm font-medium rounded-md ${
                activeStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              }`}
              disabled={activeStep === 0}
            >
              Previous
            </button>
            
            <div>
              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => console.log('Create event', eventData)}
                  className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Event
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}