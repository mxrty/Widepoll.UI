export default function StatementCreateForm() {
  return (
    <form class="container shadow-lg rounded-lg mx-auto md:w-3/4">
      <div class="p-4 bg-gray-100 bg-opacity-5">
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <h1 class="text-gray-600">New statement</h1>
          </div>
        </div>
      </div>
      <hr />
      <div class="space-y-6 bg-white">
        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:space-y-0">
          <div class=" mx-auto space-y-5">
            <h2 class=" mx-auto">Statement</h2>
            <div>
              <div class=" relative ">
                <input
                  type="text"
                  id="left"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Entity"
                />
              </div>
            </div>

            <select
              class="block w-52 text-gray-700 py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="link"
            >
              <option value="">Select an option</option>
              <option value="is">is</option>
              <option value="is_not">is not</option>
            </select>

            <div>
              <div class=" relative ">
                <input
                  type="text"
                  id="right"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Opinion"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="items-center w-full px-4 space-y-2 text-gray-500 md:space-y-0">
          <div class="w-full pt-1 mx-auto">
            <div class="relative ">
              <textarea
                class="flex-1 appearance-none border border-gray-300 w-full px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Write here."
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </div>
          </div>
        </div>
        <hr />
        <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
          <button
            type="submit"
            class="px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
