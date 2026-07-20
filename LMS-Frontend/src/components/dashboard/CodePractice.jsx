import { useState } from "react";

const CodePractice = () => {

  const [code, setCode] = useState("");

  const [warning, setWarning] = useState("");

  const handlePaste = (e) => {

    e.preventDefault();

    setWarning(

      "❌ Copy Paste is Disabled. Write the code yourself."

    );

  };

  return (

    <section className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl text-white font-bold">

        Code Practice

      </h2>

      <textarea

        value={code}

        onChange={(e)=>setCode(e.target.value)}

        onPaste={handlePaste}

        rows={15}

        placeholder="Write your code..."

        className="w-full mt-6 rounded-xl bg-slate-800 text-white p-4"

      />

      {

        warning &&

        <p className="text-red-400 mt-4">

          {warning}

        </p>

      }

    </section>

  );

};

export default CodePractice;