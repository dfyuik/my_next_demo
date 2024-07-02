import React from "react";
import { HeartIcon, UserIcon } from '@heroicons/react/20/solid';
export default function Home() {

  const items = [
    'https://s3-alpha.figma.com/hub/file/450093333/1c8da3c8-f9e3-49da-a5a1-23744ac8c736-cover.png',
    'https://s3-alpha.figma.com/hub/file/5526330848/14a6765e-153e-4a77-b281-3b76faf90eec-cover.png',
    'https://s3-alpha.figma.com/hub/file/4155729969/90f6bad4-4513-4272-8705-2b33b73ff4f1-cover.png',
    'https://s3-alpha.figma.com/hub/file/1163776049/2e50785f-62f9-41df-ab36-53b28b9facc7-cover.png',
    'https://s3-alpha.figma.com/hub/file/5456494083/d3a6b485-470e-471d-a932-67be73107678-cover.png',
    'https://s3-alpha.figma.com/hub/file/6089240884/f296bf94-aa1d-414d-b376-b0d16b1463c6-cover.png',
    'https://s3-alpha.figma.com/hub/file/4771634816/17d688df-dadd-4c4f-aa75-4b5bc5c5c795-cover.png',
    'https://s3-alpha.figma.com/hub/file/722509618/692d65bb-0f20-4ba9-b4d0-0837fe70f0f7-cover.png',
    'https://s3-alpha.figma.com/hub/file/1752518746/a39cb1b6-ce01-4e91-848e-4b0a31ad5f9f-cover.png',
    'https://s3-alpha.figma.com/hub/file/626214190/6e220bcf-c8cd-4dae-934c-e4f271d6f331-cover.png'
  ]

  return (
    <main className="container mx-auto p-4">
      <h1 className="font-bold text-3xl">Icon Packs</h1>
      <p className="text-sm text-gray-500 my-3">Elevate your interfaces with iconic icons! Explore thousands of icons.</p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((_, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <img
              src={_}
              alt="Cover"
              className="w-full h-auto rounded-md"
            />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="block text-sm font-semibold">Iconify</span>
                <span className="block text-xs text-gray-500">by Vjacheslav Trushkin</span>
              </div>
              <div className="flex">
                <div className="flex ">
                  <HeartIcon className="w-4 h-4" />
                  <span className="text-xs text-gray-500">14.7k</span>
                </div>
                <div className="flex  ml-2">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-xs text-gray-500">14.7k</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
