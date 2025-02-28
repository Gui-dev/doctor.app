interface IDoctorParams {
  params: Promise<{
    doctor_id: string
  }>
}

const Doctor = async ({ params }: IDoctorParams) => {
  const { doctor_id } = await params
  return (
    <div>
      <h1>Doctor {doctor_id}</h1>
    </div>
  )
}

export default Doctor
