"use client";

/* import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";

import { ProductWithPrice } from "@/types"; */


import  Modal  from "@/components/Modal"; 
import React, { useEffect, useState } from "react";

/* interface ModalProviderProps {
  products: ProductWithPrice[];
} */

const ModalProvider: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal isOpen={false} onChange={() => {}} title="" description="" children={<></>} />
      {/* <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} /> */}
    </>
  );
};

export default ModalProvider;