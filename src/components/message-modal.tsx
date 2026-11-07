"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import type { DialogText } from "./message-dialog";

// The pop-up (and its form + animation code) is only downloaded on first click.
const MessageDialog = dynamic(
  () => import("./message-dialog").then((mod) => mod.MessageDialog),
  { ssr: false },
);

/** Wraps a trigger button; clicking it opens the animated message form. */
export function SendMessageButton({
  children,
  className,
  onOpen,
  ...text
}: DialogText & {
  children: React.ReactNode;
  className?: string;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onOpen?.();
          setEverOpened(true);
          setOpen(true);
        }}
        className={className}
      >
        {children}
      </button>
      {everOpened && <MessageDialog open={open} onClose={close} {...text} />}
    </>
  );
}

/** "Book a visit" button: opens the form (no page change). */
export function BookVisitButton({
  children,
  className,
  onOpen,
}: {
  children: React.ReactNode;
  className?: string;
  onOpen?: () => void;
}) {
  return (
    <SendMessageButton
      className={className}
      onOpen={onOpen}
      title="Book a visit"
      subtitle="Leave your details and we will arrange a visit for you."
      intro="New visit booking request from the Nestaliving website"
      submitLabel="Book my visit"
    >
      {children}
    </SendMessageButton>
  );
}
