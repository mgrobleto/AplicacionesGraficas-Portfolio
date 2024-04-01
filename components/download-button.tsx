import React from "react";
import { Button } from "@nextui-org/react";

interface DownloadProps {
    fileUrl: string;
    fileName: string;
    textColor?: string;
}

export const DownloadButton: React.FC<DownloadProps> = ({fileUrl, fileName, textColor}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;

        link.click();
    }

    const textColorName = textColor ? `text-${textColor}` : `text-gray-500`;

    return (
        <Button className={`text-sm ${textColorName}`} variant="flat" color="default" radius="lg" size="sm" onClick={handleDownload}>    
            Descargar archivo
        </Button>
    )
}