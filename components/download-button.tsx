import React from "react";
import { Button } from "@nextui-org/react";

interface DownloadProps {
    fileUrl: string;
    fileName: string;
}

export const DownloadButton: React.FC<DownloadProps> = ({fileUrl, fileName}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;

        link.click();
    }

    return (
        <Button className="text-sm text-white" variant="flat" color="default" radius="lg" size="sm" onClick={handleDownload}>    
            Descargar archivo
        </Button>
    )
}