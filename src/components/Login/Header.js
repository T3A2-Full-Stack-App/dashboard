import { Link } from "react-router-dom";

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return (
      <div className="mb-10">
        <div className="flex justify-center">
          <img
            alt=""
            className="h-20 w-20"
            src="https://img.icons8.com/external-itim2101-fill-itim2101/344/external-delivery-truck-logistics-and-delivery-itim2101-fill-itim2101-2.png"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mt-5">
          {paragraph}{" "}
          <Link
            to={linkUrl}
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            {linkName}
          </Link>
        </p>
      </div>
    );
}