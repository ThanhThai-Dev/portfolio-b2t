"use client";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import { saveAs } from 'file-saver';

const ButtonDownload = () => {

    const handleDownload = () => {
        const pdfUrl = '/downloadCV/CV_Frontend.pdf';
        saveAs(pdfUrl, 'downloaded-file.pdf');
      };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download my CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default ButtonDownload;
