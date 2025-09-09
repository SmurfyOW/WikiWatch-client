export default function Role({ text, color, icon }) {
  let styles = "";
  let finalColor = "";
  let finalIcon = "";

  switch (text?.toLowerCase()) {
    case "damage":
      styles = "text-red-600 border-red-200 bg-red-50 capitalize";
      finalColor = "red";
      finalIcon = "💥";
      break;
    case "support":
      styles = "text-green-600 border-green-200 bg-green-50 capitalize";
      finalColor = "green";
      finalIcon = "💚";
      break;
    case "tank":
      styles = "text-blue-600 border-blue-200 bg-blue-50 capitalize";
      finalColor = "blue";
      finalIcon = "🛡️";
      break;
    default:
      styles = "text-gray-600 border-gray-200 bg-gray-50";
      finalColor = "gray";
      finalIcon = "❓";
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 border rounded-md ${styles}`}
    >
      {finalIcon} {text}
    </span>
  );
}
