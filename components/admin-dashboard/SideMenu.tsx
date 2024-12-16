import { adminSidebarMenu } from "@/constants/data";

import CustomLink from "../common/CustomLink";

export default function SideMenuAbout() {
  return (
    <aside className="md:p-8 p-6 bg-white shadow-xl rounded-lg ">
      <div className="flex flex-col gap-3">
        {adminSidebarMenu.map(({ id, title, href, icon }: any) => (
          <div key={id} className="group">
            <CustomLink path={href}>
              <div className="flex gap-3 items-center p-3 transition-shadow shadow-sm rounded-md">
                <p>{icon}</p>
                <p className="text-[15px] font-medium">{title}</p>
              </div>
            </CustomLink>
          </div>
        ))}
      </div>
    </aside>
  );
}
