import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Ckeditor({ onEditorChange, editorText }) {
    return (
        <>
            <div className="App text-black">
                <CKEditor
                    editor={ClassicEditor}
                    config={{
                        toolbar: [
                            "heading",
                            "|",
                            "bold",
                            "italic",
                            "link",
                            "bulletedList",
                            "numberedList",
                            "|",
                            "undo",
                            "redo",
                        ],
                    }}
                    data={editorText} // Menggunakan prop editorText sebagai isi editor
                    onReady={(editor) => {
                        // Anda dapat menyimpan "editor" dan menggunakannya saat diperlukan.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        onEditorChange(data); // Memanggil fungsi onEditorChange saat isi editor berubah
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
            </div>
        </>
    );
}

export default Ckeditor;
