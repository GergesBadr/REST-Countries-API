import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function ErrorPage() {
  return (
    <div className="responsive mt-14 space-y-4 text-center">
      <h1 className="text-xl font-bold sm:text-3xl">
        Oops! <br /> There is nothing here...
      </h1>
      <p className="text-lg">
        Looks like you have been lost in a world full of countries!
      </p>
      <Link
        className="custom-shadow mx-auto flex w-fit items-center justify-center gap-3 rounded-full bg-white px-6 py-2 dark:bg-light-blue "
        to="/"
      >
        Go to home page
        <FaArrowRightLong />
      </Link>
    </div>
  );
}

export default ErrorPage;
