import { useState } from "react";
import { announcement } from "../data/siteData";
import { Link } from "react-router-dom";
const DISMISS_KEY = "kk-ann-dismissed";
export default function AnnouncementBar() {
  let [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem(DISMISS_KEY) !== "1";
    } catch {
      return true;
    }
  });
  if (!visible) return null;
  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {}
    setVisible(false);
  }
  return (
    <div className="ann-bar">
      <div className="wrap">
        <div className="ann-bar__inner">
          <span>{announcement.text}</span>
          {announcement.link && (
            <Link to={announcement.link} className="ann-bar__link">
              {announcement.linkLabel}
            </Link>
          )}
          <button className="ann-bar__close" onClick={dismiss} aria-label="Dismiss">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
