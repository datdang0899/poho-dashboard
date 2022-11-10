

export default function Search(props) {
  return (
    <div className="sm:w-96 flex items-center relative px-2 mt-2 border border-stale-400 rounded-full ">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full mr-6 outline-none border-none focus:ring-0 rounded-full "
        placeholder="Search here.."
      />
      <label
        htmlFor="search"
        className="flex items-center justify-center absolute top-0 bottom-0 right-0 w-10 mb-1 h-full rounded-full text-white bg-blue-500"
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </label>
    </div>
  );
}
