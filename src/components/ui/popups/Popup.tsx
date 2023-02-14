import React from "react";
import ReactMarkdown from "react-markdown";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";

interface PopupProps {
  onClose: any;
  children: JSX.Element;
}

export default function Popup({ onClose, children }: PopupProps) {
  return (
    <Dialog
      open
      onClose={() => onClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {children}
    </Dialog>
  );
}
