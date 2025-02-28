'use client';
import React, { useRef } from 'react';
import SidebarComponent from '../components/Sidebar';
import Navbar from '../components/Navbar';

const ProjectForm = () => {
  const formRef = useRef({
    name: useRef<HTMLInputElement>(null),
    client: useRef<HTMLInputElement>(null),
    status: useRef<HTMLSelectElement>(null),
    payment: useRef<HTMLInputElement>(null),
    dueDate: useRef<HTMLInputElement>(null),
    startDate: useRef<HTMLInputElement>(null),
    developer: useRef<HTMLInputElement>(null),
    completion: useRef<HTMLInputElement>(null)
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    const newProject = {
      id: Math.random(), // Temporary ID generation
      name: formRef.current.name.current?.value,
      client: formRef.current.client.current?.value,
      status: formRef.current.status.current?.value,
      payment: formRef.current.payment.current?.value,
      startDate: formRef.current.startDate.current?.value,
      dueDate: formRef.current.dueDate.current?.value,
      developer: formRef.current.developer.current?.value,
      completion: formRef.current.completion.current?.value
    };

    try {
      const response = await fetch('http://localhost:3000/addprojects', {
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
                  ref={formRef.current.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Client */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Client</label>
                <input
                  type="text"
                  ref={formRef.current.client}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Status</label>
                <select
                  ref={formRef.current.status}
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
                  ref={formRef.current.payment}
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
                  ref={formRef.current.startDate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Due Date</label>
                <input
                  type="date"
                  ref={formRef.current.dueDate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Developer */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Project Source</label>
                <input
                  type="text"
                  ref={formRef.current.developer}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100"
                  required
                />
              </div>

              {/* Completion */}
              <div>
                <label className="block text-sm font-medium text-black mb-1">Completion (%)</label>
                <input
                  type="number"
                  ref={formRef.current.completion}
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
