'use client';
import React, { useRef } from 'react';
import SidebarComponent from '../components/Sidebar';
import Navbar from '../components/Navbar';

const ProjectForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const clientRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const startDateRef = useRef<HTMLInputElement>(null);
  const developerRef = useRef<HTMLInputElement>(null);
  const completionRef = useRef<HTMLInputElement>(null);

  // Empty input fields after adding project
  const resetForm = (): void => {
    if (nameRef.current) nameRef.current.value = '';
    if (clientRef.current) clientRef.current.value = '';
    if (statusRef.current) statusRef.current.value = '';
    if (paymentRef.current) paymentRef.current.value = '';
    if (dueDateRef.current) dueDateRef.current.value = '';
    if (startDateRef.current) startDateRef.current.value = '';
    if (developerRef.current) developerRef.current.value = '';
    if (completionRef.current) completionRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    const newProject = {
      id: Math.random(), // Temporary ID generation
      name: nameRef.current?.value || '',
      client: clientRef.current?.value || '',
      status: statusRef.current?.value || '',
      payment: paymentRef.current?.value || '',
      startDate: startDateRef.current?.value || '',
      dueDate: dueDateRef.current?.value || '',
      developer: developerRef.current?.value || '',
      completion: completionRef.current?.value || ''
    };

    resetForm(); // Clear the form after submission

    try {
      const response = await fetch('https://codestic-nk-1.vercel.app/api/addprojects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });

      const data = await response.json();
      console.log(data); // Log the response from the server
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <>
      <SidebarComponent />
      <Navbar />
      <div className="flex-1 p-4 bg-gray-400 ml-64 mt-20 min-h-screen overflow-hidden">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-black mb-6">Add New Project</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Project Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Project Name</label>
                <input
                  type="text"
                  ref={nameRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Client */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Client</label>
                <input
                  type="text"
                  ref={clientRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Status</label>
                <select
                  ref={statusRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </select>
              </div>

              {/* Payment */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Payment</label>
                <input
                  type="number"
                  ref={paymentRef}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Start Date</label>
                <input
                  type="date"
                  ref={startDateRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Due Date</label>
                <input
                  type="date"
                  ref={dueDateRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Developer */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Project Source</label>
                <input
                  type="text"
                  ref={developerRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Completion */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Completion (%)</label>
                <input
                  type="number"
                  ref={completionRef}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
