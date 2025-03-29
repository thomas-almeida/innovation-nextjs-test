'use client'

import CardBoxComposition from "@/components/compositions/CardBoxComposition";
import SignSettings from "@/components/settings/SignSettings";
import InnovationInput from "@/components/ui/InnovationInput";
import LoginButton from "@/components/ui/LoginButton";
import { useMemo, useState } from "react";

export default function Home() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const payload = {
    email: username,
    senha: password
  }

  const isDisable = useMemo(() => username.length !== 0 && password.length !== 0 ? false : true, [username, password])

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
            value={username}
            setValue={setUsername}
          />
          <InnovationInput
            icon={'/password.png'}
            type={'password'}
            placeholder={"Senha"}
            value={password}
            setValue={setPassword}
          />
          <SignSettings />
          <LoginButton
            isDisable={isDisable}
            payload={payload}
          />
        </CardBoxComposition>
      </div>
    </main>
  );
}
