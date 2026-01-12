'use client'

import { Image as ImageType } from "@/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface GalleryProps {
    images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({
    images
}) => {
    console.log("Jumlah Gambar:", images.length);
    console.log("Isi Data Gambar:", images);
    return (
        <TabGroup as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </TabList>
            </div>
            <TabPanels className="aspect-square w-full">
                {images.map((image) => (
                    <TabPanel key={image.id} className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                        <Image
                            src={image.url}
                            fill
                            alt="image"
                            className="object-cover object-center"
                        />
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    );
}

export default Gallery;