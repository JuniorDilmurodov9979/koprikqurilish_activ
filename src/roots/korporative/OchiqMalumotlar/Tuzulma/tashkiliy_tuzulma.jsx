import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const HujjatViewer = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center bg-gray-100 overflow-hidden">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <div className="w-full  h-full">
                    <Viewer
                        fileUrl="/tuzulma.pdf"
                        defaultScale={1.5} // 1:1 o‘lcham, tiniq bo‘ladi
                        plugin={[]} // default pluginlar yo‘q
                    />
                </div>
            </Worker>
        </div>
    );
};

export default HujjatViewer;
