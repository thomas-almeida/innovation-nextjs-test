import CardBoxComposition from "@/components/compositions/CardBoxComposition";
import SignSettings from "@/components/settings/SignSettings";
import InnovationInput from "@/components/ui/InnovationInput";
import LoginButton from "@/components/ui/LoginButton";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-svh">
      <div className="lg:w-[45%] border-slate-200 p-4">
        <h1 className="text-center font-semibold text-[#80bc04] text-xl lg:text-3xl lg:mb-10">
          Bem-vindo a Innovation Brindes
        </h1>
        <CardBoxComposition>
          <InnovationInput
            icon={'/user.png'}
            type={'text'}
            placeholder={"Usuário"}
          />
          <InnovationInput
            icon={'/password.png'}
            type={'password'}
            placeholder={"Senha"}
          />
          <SignSettings />
          <LoginButton />
        </CardBoxComposition>
      </div>
    </main>
  );
}
