import UniversityDetails from "../../components/UniversityDetails";

export default function Page({ params }: { params: any }) {
  return (
    <UniversityDetails universityName={params.university}/>
  )
}