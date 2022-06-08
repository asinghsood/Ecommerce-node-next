import { useState, useEffect } from "react";
import { Container } from "./Notification.style";

interface NotificationProps {
  toastList?: {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
  }[];
}

const Notification = ({ toastList }: NotificationProps) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <Container>
      {list &&
        list.map((toast, i) => (
          <div
            key={i}
            style={{ background: toast.backgroundColor }}
            className={`notification toast`}
          >
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
    </Container>
  );
};

const Color = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

const Styles = {
  info: "#2196f3",
  success: "#4caf50",
  warning: "#ff9800",
  error: "#f44336",
};

export default Notification;
