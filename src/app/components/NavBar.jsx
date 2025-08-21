"use client";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 px-4">
      <div className="flex-1 text-xl font-bold">My App</div>

      <div className="flex-none">
        {/* DaisyUI theme toggle */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="dark"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17l-.71.71..."></path>
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13.35A9 9 0 1111 3a7 7..."></path>
          </svg>
        </label>
      </div>
    </div>
  );
}
