import React from "react";

interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

export default function WhatsAppIcon({
  size = 22,
  className = "",
}: WhatsAppIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        flexShrink: 0,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    >
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1 6.9C15.7 5.5 13.9 4.8 12 4.8C8 4.8 4.8 8 4.8 12C4.8 13.3 5.1 14.5 5.8 15.6L4.8 19.2L8.5 18.2C9.5 18.8 10.7 19.2 12 19.2C16 19.2 19.2 16 19.2 12C19.2 10.1 18.5 8.3 17.1 6.9ZM12 18C10.9 18 9.8 17.7 8.8 17.1L8.6 17L6.4 17.6L7 15.4L6.9 15.2C6.3 14.2 5.9 13.1 5.9 12C5.9 8.6 8.6 5.9 12 5.9C13.6 5.9 15.1 6.5 16.3 7.7C17.4 8.8 18.1 10.4 18.1 12C18.1 15.4 15.4 18 12 18ZM15.3 13.5C15.1 13.4 14.2 13 14 12.9C13.8 12.8 13.7 12.8 13.6 13C13.5 13.2 13.2 13.6 13.1 13.7C13 13.8 12.9 13.8 12.7 13.7C12.5 13.6 12 13.4 11.3 12.8C10.7 12.3 10.3 11.7 10.2 11.5C10.1 11.3 10.2 11.2 10.3 11.1C10.4 11 10.5 10.9 10.6 10.8C10.7 10.7 10.7 10.6 10.8 10.5C10.9 10.4 10.8 10.3 10.8 10.2C10.7 10.1 10.4 9.2 10.2 8.8C10.1 8.4 9.9 8.5 9.8 8.5C9.7 8.5 9.6 8.5 9.4 8.5C9.3 8.5 9.1 8.5 8.9 8.7C8.7 8.9 8.2 9.3 8.2 10.2C8.2 11.1 8.9 12 9 12.1C9.1 12.2 10.2 14 12 14.7C12.4 14.9 12.7 15 13 15.1C13.4 15.2 13.8 15.2 14.1 15.1C14.4 15.1 15.1 14.7 15.3 14.3C15.4 13.8 15.4 13.5 15.3 13.5Z"
        fill="white"
      />
    </svg>
  );
}
