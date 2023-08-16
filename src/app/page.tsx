import { Metadata } from "next";

import SearchIcon from "@mui/icons-material/Search";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import SettingsIcon from "@mui/icons-material/Settings";

export const metadata: Metadata = {
  title: "hoep-stock",
};

export default function Home() {
  return (
    <main>
      <header className="flex justify-end">
        <SearchIcon />
        <DomainVerificationIcon />
        <SettingsIcon />
      </header>
      <div>main</div>
    </main>
  );
}
