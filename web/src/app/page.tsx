import { Header } from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header href="/" iconName="appointment" iconClassName="h-5 w-5">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-doctorme.png"
            alt="DoctorMe logo"
            height={48}
            width={48}
          />
          <span className="font-bold text-3xl">DoctorMe</span>
        </div>
      </Header>
    </div>
  )
}
