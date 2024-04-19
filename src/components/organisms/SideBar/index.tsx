import SideBarFooter from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

interface ISideBarProps {
  activeMenu: string;
}

export default function SideBar({ activeMenu }: ISideBarProps) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            href="/member"
            active={activeMenu === "Overview"}
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transaction"
            href="/member/transactions"
            active={activeMenu === "Transactions"}
          />
          <MenuItem title="Messages" icon="ic-menu-messages" href="#" />
          <MenuItem title="Card" icon="ic-menu-card" href="#" />
          <MenuItem title="Rewards" icon="ic-menu-reward" href="#" />
          <MenuItem
            title="Settings"
            icon="ic-menu-setting"
            href="/member/edit-profile"
            active={activeMenu === "Settings"}
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <SideBarFooter />
      </div>
    </section>
  );
}
