import { Metadata } from "next";
import { Roboto, Noto_Sans_KR } from "next/font/google"; // Roboto와 한글 NotoSans를 사용합니다.

import SearchIcon from "@mui/icons-material/Search";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import SettingsIcon from "@mui/icons-material/Settings";
import { Inter } from "next/font/google";

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
