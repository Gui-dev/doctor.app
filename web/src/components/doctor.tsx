import Image from "next/image"
import Link from "next/link"

import doctorImage from '@/assets/photo-1.jpg'
import { Icon } from "./icon"

interface IDoctorProps {
  doctor: {
    id: string
    name: string
    speciality: string
    location: string
    image?: string
  }
}

export const Doctor = ({ doctor }: IDoctorProps) => {
  return (
    <Link
      href={`/doctor/${doctor.id}`}
      className="flex flex-col gap-3 border border-gray-800 px-3 py-4 rounded-lg overflow-x-auto w-full max-w-[150px]"
    >
      <Image src={doctorImage} alt={doctor.name} height={76} width={76} className="rounded-lg" />
      <div className="flex flex-col">
        <h3 className="font-semibold truncate">{doctor.name}</h3>
        <p className="font-roboto text-gray-300 text-sm truncate">{doctor.speciality}</p>
      </div>
      <p>
        <Icon name="map" className="h-4 w-4 text-[#FFBB63]">
          <span className="text-sm text-gray-500">{doctor.location}</span>
        </Icon>
      </p>
    </Link>
  )
}