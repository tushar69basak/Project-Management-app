export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 md:mb-0">
          Tailwind Test Dashboard
        </h1>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Click Me
        </button>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Card 1</h2>
          <p className="text-gray-600">
            This is a sample card styled with Tailwind CSS utilities.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Card 2</h2>
          <p className="text-gray-600">
            Tailwind handles responsive grids, spacing, and hover effects.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Card 3</h2>
          <p className="text-gray-600">
            Shadows, rounded corners, and spacing all controlled via Tailwind.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-6 mb-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">Tushar Basak</td>
              <td className="px-6 py-4 whitespace-nowrap">Project Manager</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Developer</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500">
        Tailwind CSS test footer — all utilities should render correctly
      </footer>
    </div>
  );
}
