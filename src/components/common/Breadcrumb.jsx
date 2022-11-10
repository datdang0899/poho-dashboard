import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/20/solid";

const pages = [
  { name: "users", href: "#", current: false },
  { name: "Tiến Đạt", href: "#", current: true },
];

export default function Breadcrumb({ type, children }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            {type === "heading" ? (
              <a
                href="#heading"
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {"Cty sản xuất thiết bị công nghệ T2T"}
              </a>
            ) : (
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Business</span>
              </a>
            )}
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronLeftIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
      {children}
    </nav>
  );
}
