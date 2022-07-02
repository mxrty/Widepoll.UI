import Link from "next/link";
const Home = (props) => {
  const renderTruths = () => {
    if (props.truths) {
      return props.truths.map((truth, index) => {
        let background = index % 2 == 0 ? "bg-gray-50" : "bg-white";
        let boxStyle = `${background} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`;
        return (
          <Link href="/statements/69">
            <a class={boxStyle}>
              <dt class="text-sm font-medium text-gray-500">{truth.id}</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {truth.concept1} {truth.link} {truth.concept2}
              </dd>
            </a>
          </Link>
        );
      });
    }
    return (
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        Nothing
      </div>
    );
  };

  return (
    <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
      <div class="border-t border-gray-200">
        <dl>{renderTruths()}</dl>
      </div>
    </div>
  );
};

export default Home;
