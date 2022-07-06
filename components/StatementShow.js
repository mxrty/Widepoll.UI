import { useState } from "react";

const StatementShow = (props) => {
  const [activeTab, setActiveTab] = useState("THREAD");

  return (
    <div class="overflow-auto shadow-lg rounded-lg m-auto">
      <div class="bg-white w-full p-4">
        <p class="text-gray-800 text-xl font-medium mb-2">
          Meat is bad for the environment
        </p>
        <p class="text-gray-400 text-md">
          I think that the net effect of meat production is bad for the
          environment, and we need to quantify this effect if we want to be able
          to act proportionally to counteract global warming. Thoughts?
        </p>
      </div>
      <hr />
      <div class="bg-white flex p-4 mb-2">
        <p class="text-gray-800 text-md flex-auto">Like</p>
        <p class="text-gray-800 text-md flex-auto">
          Rep Timmy has voted “Agree” on your behalf
        </p>
      </div>
      <hr />
      <div class="bg-white mb-2">
        <div class="bg-white p-16 text-center border mx-4">
          <div>Comment section here</div>
        </div>
      </div>
    </div>
  );
};

export default StatementShow;
