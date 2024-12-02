'use client'
import Image from "next/image"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface Bmenue {
    id: number,
    title: string,
    description: string,
    image: string
}

const BrowseMenue: Bmenue[] = [
    { id: 1, title: 'Caterings', description: 'In the new era of technology we look in the future with certainty for life.', image: '/image/kebab-set-table 1.png' },
    { id: 2, title: 'Birthdays', description: 'In the new era of technology we look in the future with certainty for life.', image: '/image/birthday.png' },
    { id: 3, title: 'Weddings', description: 'In the new era of technology we look in the future with certainty for life.', image: '/image/happy-man-wife-sunny-day 1.png' },
    { id: 4, title: 'Events', description: 'In the new era of technology we look in the future with certainty for life.', image: '/image/Mask group.png' },]


export default function Services() {
    return (
        <main className="w-full">
            <section className="flex justify-center overflow-x-hidden  ">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}

                    className=" w-[100vw]   "    >
                    <CarouselContent className="px-3">
                        {BrowseMenue.map((menue) => (
                            <CarouselItem key={menue.id} className=" md:basis-1/2 lg:basis-1/4   ">
                                <div className="">
                                    <Card className="rounded-2xl shadow-lg  ">
                                        <CardContent className="flex aspect-square items-center    w-full h-[450] rounded-2xl   flex-col ">
                                          <div className="h-72 w-full">   <Image src={menue.image} height={443} width={306} alt={`${menue.title} `} className="  h-72  w-full mt-2" /></div>
                                            <h2 className="text-2xl font-bold text-[#2C2F24] mt-6 mb-2 self-start">{menue.title}</h2>
                                            <p className="text-[#414536]  self-start">{menue.description}</p>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>

        </main>
    )
}