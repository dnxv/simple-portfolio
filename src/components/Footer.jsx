import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">

      <p className="text-sm opacity-50
      mt-2">
        &copy; {new Date().getFullYear()} Dave.dev
        All rights reserved.

      </p>

    </div>
  )
}

export default Footer;