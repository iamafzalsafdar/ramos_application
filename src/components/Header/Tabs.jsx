import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const pages = ["Dashboard", "Reports", "Documets", "History", "Settings"];

  return (
    <div className="w-full max-w-md px-2  sm:px-0">
      <Tab.Group data-aos="fade-up" data-aos-duration="1500">
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {pages.map((el) => (
            <Tab
              key={el}
              className={() =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {el}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
