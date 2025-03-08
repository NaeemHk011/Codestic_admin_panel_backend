
'use client';

import React, { useEffect, useState } from 'react';

// Define types for project data
interface Project {
  id: number;
  name: string;
  client: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
  payment: string;
  dueDate: string;
  developer: string;
  completion: number; // Percentage completion
}

const Hero = () => {
  const [projects, setProjects] = useState<Project[]>([]);  // Type the state as an array of Project
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [ActiveProject, setActiveProject] = useState<number>();
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [PendingPayment, setPendingPayment] = useState<number>(0);


  useEffect(() => {
console.log(localStorage.getItem('token'))
    if (!localStorage.getItem('token')) {
      window.location.href = '/login';
    }
    
  },[])
 

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://admin-panel-backend-8vo5.vercel.app/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data: Project[] = await response.json();
        console.log(data.length)
        setProjects(data);
      } catch (error) {
        setError('Error loading projects data');
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, []);


  useEffect(() => {
    if (!projects || projects.length === 0) return; // Agar projects empty ho toh calculation avoid kare
  
    // Active projects count karna
    let activeCount = 0;
    let totalPayment = 0;
    let pendingPayment = 0;
  
    projects.forEach((project) => {
      const payment = parseInt(project.payment || "0"); // Ensure valid number
  
      totalPayment += payment;
  
      if (project.status === "In Progress") {
        activeCount++;
        pendingPayment += payment;
      }
    });
  
    setTotalPayment(totalPayment);
    setActiveProject(activeCount);
    setPendingPayment(pendingPayment);
  }, [projects]);
  

  return (
    <div className="flex-1 p-8 bg-gray-50 ml-64 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Projects</h3>
            <span className="text-blue-500 bg-blue-100 p-2 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </span>
          </div>
          <p className="text-2xl font-semibold mt-2">{projects.length}</p>
          <p className="text-blue-500 text-sm mt-2">+3 new this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Active Clients</h3>
            <span className="text-green-500 bg-green-100 p-2 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </span>
          </div>
          <p className="text-2xl font-semibold mt-2">{ActiveProject}</p>
          <p className="text-green-500 text-sm mt-2">Project In Progress</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Payments</h3>
            <span className="text-red-500 bg-red-100 p-2 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <p className="text-2xl font-semibold mt-2">{totalPayment}</p>
          <p className="text-red-500 text-sm mt-2">{ActiveProject} pending invoices</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Pending Payment</h3>
            <span className="text-purple-500 bg-purple-100 p-2 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </span>
          </div>
          <p className="text-2xl font-semibold mt-2">{PendingPayment}</p>
          <p className="text-purple-500 text-sm mt-2">+1 new developer</p>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Current Projects</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Developer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.payment}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.dueDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.developer}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.completion}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{project.completion}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Loading or Error Message */}
      {loading && <div className="mt-4 text-center">Loading...</div>}
      {error && <div className="mt-4 text-center text-red-500">{error}</div>}
    </div>
  );
};

export default Hero; 