import Chart from "./Chart";
const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-6 py-12 px-14">
      <h2>Dashboard</h2>
      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Subhajit Sarkar</span>
          <span className="text-gray-500">Your Balance: Rs 50000</span>
        </div>

        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Subhajit Sarkar</span>
          <span className="text-gray-500">Your Expenses: Rs 18000</span>
        </div>
      </div>

      <div className="flex space-x-8 w-4/5 flex-col">
        <h2>Expenses Chart</h2>
        <Chart />
      </div>
      <div className="flex space-x-8">
        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Your Activity</span>
          <li className="mt-4">You sent Rs 1000 to your brother</li>
        </div>

        <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600">
          <span>Pending Bills</span>
          <li className="mt-4">Broadband Bill : Rs 1000</li>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
