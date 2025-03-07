import { Doctor } from '@/components/doctor'
import { Header } from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'

const fakeDoctor = {
  id: '1',
  name: 'Bruce Banner',
  speciality: 'Clinico Geral',
  location: 'New York',
  image: '',
}

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
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

      <h1 className="font-bold text-xl">
        Assistente pessoal
        <br />
        para agendar consultas
      </h1>

      <div className="flex flex-col gap-3">
        <div className="flex w-full items-center gap-4 overflow-x-auto">
          <div className="rounded-xl bg-green-500 p-3">
            <h2 className="font-roboto font-semibold text-sm">
              Agendamento Hoje
            </h2>
            <p className="font-normal font-roboto text-gray-100 text-xs">
              10:00 - Clínico Geral
            </p>
          </div>

          <div className="rounded-xl bg-green-500 p-3">
            <h2 className="font-roboto font-semibold text-sm">
              Agendamento Amanhã
            </h2>
            <p className="truncate font-normal font-roboto text-gray-100 text-xs">
              10:00 - Clínico Geral
            </p>
          </div>
        </div>

        <div>
          <Link
            href="/schedules"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-3 py-1 font-roboto font-semibold text-gray-100 text-xs"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-gray-100 p-1 text-green-500 text-xs">
              3
            </span>{' '}
            Meus agendamentos
          </Link>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className="font-semibold text-lg">Médicos disponíveis</h2>
        <div className="flex justify-between">
          <Doctor doctor={fakeDoctor} />
        </div>
      </div>

    </div>
  )
}
