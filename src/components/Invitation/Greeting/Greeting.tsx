import { Invitation } from "@/types/invitation";
import React from "react";

export const Greeting = ({ dev, invitation, greetingRef }: { dev: boolean; invitation: Invitation | null; greetingRef: HTMLElement }) => {
  return <span>Hello greeting</span>;
};
