export default function Option() {
  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Location
      </label>
      <span className="mt-1 mx-auto block w-16 h-16 bg-teal-400 rounded-full border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none sm:text-sm"></span>
      {/* <select
        id="location"
        name="location"
        className="mt-1 mx-auto block w-16 h-16 rounded-full border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select> */}
    </div>
  );
}
