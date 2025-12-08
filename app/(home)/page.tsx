import Image from 'next/image'
import {Button} from "@heroui/react";

export default function Home() {
  return (
      <div className="flex flex-wrap min-h-screen w-full pt-32 px-8 bg-background gap-4">
          <div
              className="flex flex-wrap items-center justify-center md:w-4/12 w-full h-fit p-4 bg-card-background rounded-xl text-center shadow-md">
              <Image
                  alt="Profile Picture"
                  width={250}
                  height={250}
                  className="rounded-full object-cover w-1/2"
                  loading="lazy"
                  src="https://avatars.githubusercontent.com/u/63682340?v=4"
              />
              <h1 className={'text-2xl font-bold'}>Leonardo Yael Bazán Becerril</h1>
              <h2 className={'text-xl'}>Computer Systems Engineer | Full-Stack Web developer | Learning TS y
                  Kotlin</h2>
              <Button
                  className="mx-auto px-4 py-2 bg-primary rounded-full hover:scale-105 transition-all font-bold">DOWNLOAD
                  RESUME</Button>
          </div>
          <div
              className="flex flex-wrap items-center justify-center md:w-4/12 w-full p-4 bg-card-background rounded-xl text-center gap-y-4 shadow-md">
              <Image
                  alt="Profile Picture"
                  width={250}
                  height={250}
                  className="rounded-full object-cover w-1/2"
                  loading="lazy"
                  src="https://avatars.githubusercontent.com/u/63682340?v=4"
              />
              <h1 className={'text-2xl font-bold'}>Leonardo Yael Bazán Becerril</h1>
              <h2 className={'text-xl'}>Computer Systems Engineer | Full-Stack Web developer | Learning TS y
                  Kotlin</h2>
              <Button
                  className="mx-auto px-4 py-2 bg-primary rounded-full hover:scale-105 transition-all font-bold">DOWNLOAD
                  RESUME</Button>
          </div>
    </div>
  );
}