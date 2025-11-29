'use client'

import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal title="Test Title" description="tes Description" isOpen onClose={() => { }}>
        Children
      </Modal>
    </div>
  );
}

export default SetupPage