import { useRouter } from "next/router";
import LargeScreenHeader from "../LargeScreenHeader";
import SmallScreenHeader from "../SmallScreenHeader";
import { useEffect, useState } from "react";
import useTheme from "@/shared/hooks/useTheme";
import Container from "../Container";
import Image from "next/image";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

function Header({ bgColor, darkBgColor }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();

  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!isLargeScreen) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initialize the isScrolled state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLargeScreen]);

  const currentBgColor = isDarkMode ? darkBgColor : bgColor;
  return (
    <div
      className={`fixed pb-2 top-0 left-0 dark:bg-darkHeader w-full z-50 transition-all duration-300  ${
        isScrolled
          ? "shadow-sm backdrop-filter backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled
          ? currentBgColor || "transparent"
          : "transparent",
      }}
    >
      <header>
        {isLargeScreen ? (
          <Container>
            <div className="pt-3">
              <div className="hidden md:flex items-center justify-between">
                <div
                  className="cursor-pointer mr-10"
                  onClick={() => router.push(`/`)}
                >
                  <Image
                    src="/logo/markup-logo.png"
                    width={44}
                    height={56}
                    alt="Logo"
                    className="object-contain block dark:hidden"
                  />

                  {/* Dark Mode Logo */}
                  <Image
                    src="/logo/logo-dark.png"
                    width={44}
                    height={56}
                    alt="Logo Dark"
                    className="object-contain hidden dark:block"
                  />
                </div>
                <LargeScreenHeader
                  bgColor={bgColor}
                  router={router}
                  isDarkMode={isDarkMode}
                  darkBgColor={darkBgColor}
                  toggleTheme={toggleTheme}
                />
              </div>
            </div>
          </Container>
        ) : (
          <SmallScreenHeader />
        )}
      </header>
    </div>
  );
}

export default Header;
