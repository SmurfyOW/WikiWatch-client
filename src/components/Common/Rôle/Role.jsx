export default function Role({ text, color, icon }) {
  let styles = "";

  switch (color) {
    case "red":
      styles = "text-red-600 border-red-200 bg-red-50";
      break;
    case "green":
      styles = "text-green-600 border-green-200 bg-green-50";
      break;
    case "blue":
      styles = "text-blue-600 border-blue-200 bg-blue-50";
      break;
    default:
      styles = "text-gray-600 border-gray-200 bg-gray-50";
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 border rounded-md text-sm font-medium ${styles}`}
    >
      {icon} {text}
    </span>
  );
}
