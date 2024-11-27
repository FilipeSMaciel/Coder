import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function BarraPesquisa() {

    const { handleSubmit } = useForm();

    const onSubmitSearch = async (data) => {

    }

    return (
        <section>
            <div>
                <h1>Procure um freelance {'>>'}</h1>
                <h2>Pesquise o projeto perfeito para você</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmitSearch)}>
                        <input
                            type="text"
                            placeholder=""
                            className="border border-black rounded-sm"
                            required
                            {...register("pesquisa")}
                        />
                        <button type="submit">
                            PESQUISAR
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h1>MAIS VISTOS RECENTEMENTE {'>>'}</h1>
                    <hr className="my-2 mx-auto border-2 border-inset bg-verde_botao" />
                    <h2>Com base nos projetos de mais destaques dessa semana</h2>
                </div>
                <div>
                    <div>
                        <Projeto />
                    </div>
                </div>
            </div>
        </section>
    )
}