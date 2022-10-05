import React from "react";

export default function Login() {
  const validationEmail = (e) => {
    e.preventDefault();
    window.location.href = "/Layout";
  };

  return (
    <div>
      <button onClick={validationEmail}> buyyey</button>
    </div>
  );
}
