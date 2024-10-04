const Faq = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300 dark:divide-gray-600">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do you have Discount?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  yes ,We do.You have to connect to our page and website to get
                  it .
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What About the couple cost?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Its 2.5X than the average cost.You can take extra options
                  too.But you have to say it while choosing the package
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Do you guys have combo pack?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  We don't Provide combo hence its hard to maintain.But we do
                  have multiple packages that you can choose
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
