import React from "react";

function RenderHTML({ htmlContent }) {
    return (
        <div
            className="text-[var(--white-or-black)]"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}

export default RenderHTML;
