import { useRouter } from "next/router";
import Link from "next/link";
import { useMemo } from "react";

const Breadcrumb = () => {
  const router = useRouter();

  // Mapping path segments to their corresponding labels
  const pathToLabel = {
    services: "Xidmətlər",
    projects: "Layihələr",
    about: "Haqqımızda",
    blogs: "Bloqlar",
    team: "Komandamız",
    // Add more mappings as needed
    // Example:
    // about: "Haqqımızda",
    contact: "Əlaqə",
  };

  const pathSegments = router.asPath
    .split("/")
    .filter((segment) => segment)
    .map((segment) => decodeURIComponent(segment.split("?")[0])); // Remove query parameters

  // Function to format labels by replacing hyphens with spaces and capitalizing words
  const formatLabel = (segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const breadcrumbItems = useMemo(() => {
    const items = [];

    pathSegments.forEach((segment, index) => {
      // Skip 'home' and 'profil' as they are handled statically
      if (segment === "home" || segment === "profil") return;

      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const label = pathToLabel[segment] || formatLabel(segment);
      const isLast = index === pathSegments.length - 1;

      items.push(
        <div key={path} className="flex items-center">
          <span className=" text-base font-normal leading-6 text-grayText mx-2 dark:text-white">
            /
          </span>
          {isLast ? (
            <span className=" text-base font-normal leading-6 text-textSecondaryDefault dark:text-white">
              {label}
            </span>
          ) : (
            <Link href={path}>
              <span className=" text-base font-normal leading-6 text-grayText hover:text-textSecondaryDefault dark:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                {label}
              </span>
            </Link>
          )}
        </div>
      );
    });

    return items;
  }, [pathSegments]);

  // Determine if "Profil" should be shown based on the current path
  const showProfile = router.pathname.startsWith("/hesablarim");

  return (
    <div className="flex flex-wrap md:flex-nowrap flex-row gap-3 mb-6 mt-custom-space">
      {/* Static home link */}
      <Link href="/">
        <span className=" text-base font-normal leading-6 text-gray-500 dark:text-gray-400 hover:text-textSecondaryDefault cursor-pointer transition-colors duration-300 ease-in-out">
          Əsas səhifə
        </span>
      </Link>

      {/* Render static separator and profile link only if showProfile is true */}
      {showProfile && (
        <>
          <span className=" text-base font-normal leading-6 text-grayText mx-2">
            /
          </span>
          <Link href="/hesablarim">
            <span className=" text-base font-normal leading-6 text-grayText hover:text-textSecondaryDefault cursor-pointer transition-colors duration-300 ease-in-out">
              Profil
            </span>
          </Link>
        </>
      )}

      {breadcrumbItems}
    </div>
  );
};

export default Breadcrumb;
