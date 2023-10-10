import { useState } from "react";
import Table from "./components/Table";
import tableData from "./data/tableData";

function App() {
  const [open, setOpen] = useState(true);

  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const menus = [
    {
      id: "9334440a-78c8-4241-a03b-d439a35c1197",
      title: "داشبورد",
      src: "Chart_fill",
    },
    {
      id: "246a5f17-4c2f-4f6f-884c-4bd3cf2d4589",
      title: "پیام ها",
      src: "Chat",
    },
    {
      id: "01aa50dc-a7f0-4bda-ae30-27cb9c10c0e4",
      title: "پروفایل",
      src: "User",
      gap: true,
    },
    {
      id: "b35cd761-adce-4991-9cbf-504f0bb8dbf4",
      title: "تست ",
      src: "Calendar",
    },
    {
      id: "5e7dfcd5-b480-4bdd-8eed-4cd6b27e9167",
      title: "جستجو",
      src: "Search",
    },
    {
      id: "1be6fde4-1f3f-4178-ab2a-d264d91ff743",
      title: "تست",
      src: "Chart",
    },
    {
      id: "6424a3de-223d-493e-bf29-5ce8755748fc",
      title: "تست ",
      src: "Folder",
      gap: true,
    },
    {
      id: "1ff0c743-b3d8-4a57-9bcc-d640c2a9880b",
      title: "تنظیمات",
      src: "Setting",
    },
  ];

  return (
    <div className="flex bg-light-white">
      <div
        className={`${
          open ? "w-72" : "w-32"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="/image/control.png"
          className={`absolute cursor-pointer -rotate-180 -left-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/image/logo.png"
            className={`cursor-pointer duration-500 ${
              open ? "rotate-[360deg]" : ""
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              open ? "" : "scale-0"
            }`}
          >
            ادمین
          </h1>
        </div>
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <li
              key={menu.id}
              className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 ${
                menu.gap ? "mt-9" : "mt-2"
              } ${
                open ? "hover:bg-light-white nav" : "h-10 w-10 rounded-full"
              } ${index === 1 ? "bg-light-white" : ""}`}
              onMouseOver={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <img
                src={`/image/${menu.src}.png`}
                // src="/image/Calendar.png"
                alt={`${menu.title} logo`}
                className={`flex justify-center items-center origin-right transition-all duration-500 ${
                  open ? "w-10 h-10" : "w-5 h-5"
                }`}
              />
              {hoveredMenu === index && !open ? (
                <span
                  className={`text-xs whitespace-nowrap font-bold text-gray-400`}
                >
                  {menu.title}
                </span>
              ) : (
                ""
              )}
              <span
                className={`origin-right duration-200 ${open ? "" : "hidden"}`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 container mx-auto p-4">
        {/* Render your React Router Dom components here | Outlet  */}
        <Table data={tableData} />
      </div>
    </div>
  );
}

export default App;
