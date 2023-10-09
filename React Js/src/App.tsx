import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

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
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 nav ${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 1 ? "bg-light-white" : ""}`}
            >
              <img
                src={`/image/${menu.src}.png`}
                // src="/image/Calendar.png"
                alt={`${menu.title} logo`}
                className={`origin-right ${open ? "w-10 h-10" : "w-8 h-8"}`}
              />
              <span
                className={`origin-right duration-200 ${open ? "" : "hidden"}`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">صفحه اصلی</h1>
        {/* Render your React Router Dom components here | Outlet  */}
      </div>
    </div>
  );
}

export default App;
