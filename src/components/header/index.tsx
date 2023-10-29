import DubTypography from "../ui/dub-typography";
import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <DubTypography variant="h5" fontWeight="bold">
        News App
      </DubTypography>
    </div>
  );
}
