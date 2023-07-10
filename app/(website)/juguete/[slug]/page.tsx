import { LoanRequestForm } from "components/LoanRequestForm/LoanRequestForm";

interface Props {
  params: {
    slug: string;
  };
}

async function Page({ params: { slug } }: Props) {
  // TODO: #334 Crear GROQ query para un 'toy' por slug.

  return (
    <>
      <LoanRequestForm />
    </>
  );
}

export default Page;
