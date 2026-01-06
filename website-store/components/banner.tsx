import { Banner as BannerType } from "@/types";

interface BannerProps {
    data: BannerType
}

const Banner: React.FC<BannerProps> = ({
    data
}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8"> 
            <div
                className="relative aspect-[3/1] md:aspect-[5/1] rounded-xl overflow-hidden bg-cover bg-center shadow-sm"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="h-full w-full flex items-center justify-center p-4">
                    <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-black text-center max-w-xs sm:max-w-xl leading-tight">
                        {data?.label}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner