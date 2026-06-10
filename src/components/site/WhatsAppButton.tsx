export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201200112284?text=Hello%2C%20I%20would%20like%20to%20request%20a%20freight%20quote."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-105"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-70"
        style={{
          backgroundColor: "#25D366",
          animation: "wa-pulse 3s ease-out infinite",
        }}
      />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.31c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.11.55 4.17 1.6 5.99L4 28l6.13-1.6a11.97 11.97 0 005.89 1.5h.01c6.63 0 12.02-5.39 12.02-12.02C28.05 9.39 22.65 4 16.02 4zm0 21.97h-.01a9.96 9.96 0 01-5.07-1.39l-.36-.22-3.63.95.97-3.54-.24-.36a9.96 9.96 0 01-1.53-5.31c0-5.51 4.48-9.99 9.99-9.99 2.67 0 5.18 1.04 7.07 2.93a9.93 9.93 0 012.93 7.07c0 5.51-4.48 9.99-9.99 9.99z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background opacity-0 shadow transition group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
