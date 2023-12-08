function ErrorIndicator({ message }) {
  return (
    <div className="responsive text-center">
      <p className="text-lg font-semibold text-[#C51605]">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-5 rounded-full bg-[#C51605] px-5 py-2 text-white"
      >
        Try Reloading...
      </button>
    </div>
  );
}

export default ErrorIndicator;
