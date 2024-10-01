import { IoIosArrowDown } from "react-icons/io";
import { IoSearchCircleSharp } from "react-icons/io5";
import { ButtonUI } from "./ButtonUI";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenuBarNavigation() {
  return (
    <Menubar
      className="h-16 w-[950px] rounded-lg flex justify-between"
      style={{ backgroundColor: "#F2F5F9", color: "#6C757D" }}
    >
      <div className="flex gap-3">
        <MenubarMenu>
          <MenubarTrigger className="text-lg cursor-pointer">
            Home
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-lg  cursor-pointer">
            About
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-lg  cursor-pointer">
            Services
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-lg  cursor-pointer">
            Blog
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-lg  cursor-pointer">
            Pages
            <IoIosArrowDown className="mt-1" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Our Features</MenubarRadioItem>
              <MenubarRadioItem value="andy">Our team</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Testimonal</MenubarRadioItem>
              <MenubarRadioItem value="Luis">FAQs</MenubarRadioItem>
              <MenubarRadioItem value="Luis">404 Page</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-lg  cursor-pointer">
            Contact
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex gap-3 items-center">
        <IoSearchCircleSharp
          className="cursor-pointer"
          size={50}
          style={{ color: "#015EC9" }}
        />
        <ButtonUI />
      </div>
    </Menubar>
  );
}
