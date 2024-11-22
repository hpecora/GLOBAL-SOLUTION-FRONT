import { NextResponse } from "next/server";

let energySources: Array<any> = [];
let idCounter = 1;

// GET: Listar todas as fontes de energia
export async function GET() {
    try {
        return NextResponse.json({
            message: "Lista de fontes de energia",
            data: energySources,
        });
    } catch (error) {
        console.error("Erro ao listar fontes de energia:", error);
        return NextResponse.json(
            { message: "Erro ao listar fontes de energia" },
            { status: 500 }
        );
    }
}

// POST: Cadastrar uma nova fonte de energia
export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Recebendo dados para cadastro:", body);

        const { nome, tipo, potencia, custoMedio, impactoAmbiental } = body;

        if (!nome || !tipo || potencia <= 0 || custoMedio <= 0 || !impactoAmbiental) {
            return NextResponse.json(
                { message: "Todos os campos são obrigatórios e devem ser válidos" },
                { status: 400 }
            );
        }

        const newSource = {
            id: idCounter++,
            nome,
            tipo,
            potencia,
            custoMedio,
            impactoAmbiental,
        };

        energySources.push(newSource);
        console.log("Fonte cadastrada com sucesso:", newSource);

        return NextResponse.json({
            message: "Fonte de energia cadastrada com sucesso",
            data: newSource,
        });
    } catch (error) {
        console.error("Erro ao cadastrar fonte de energia:", error);
        return NextResponse.json(
            { message: "Erro ao cadastrar fonte de energia" },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    console.log("PUT /api/energy-sources chamado");

    try {
        const body = await request.json();
        console.log("Dados recebidos para atualização:", body);

        const { id, nome, tipo, potencia, custoMedio, impactoAmbiental } = body;

        if (!id || !nome || !tipo || potencia <= 0 || custoMedio <= 0 || !impactoAmbiental) {
            return NextResponse.json(
                { message: "Todos os campos são obrigatórios e devem ser válidos" },
                { status: 400 }
            );
        }

        const sourceIndex = energySources.findIndex((item) => item.id === id);

        if (sourceIndex === -1) {
            return NextResponse.json(
                { message: "Fonte de energia não encontrada" },
                { status: 404 }
            );
        }

        energySources[sourceIndex] = {
            id,
            nome,
            tipo,
            potencia,
            custoMedio,
            impactoAmbiental,
        };

        console.log("Fonte atualizada com sucesso:", energySources[sourceIndex]);

        return NextResponse.json({
            message: "Fonte de energia atualizada com sucesso",
            data: energySources[sourceIndex],
        });
    } catch (error) {
        console.error("Erro ao atualizar fonte de energia:", error);
        return NextResponse.json(
            { message: "Erro ao atualizar fonte de energia" },
            { status: 500 }
        );
    }
}

// DELETE: Remover uma fonte de energia por ID
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { message: "ID é obrigatório para deletar" },
                { status: 400 }
            );
        }

        const sourceIndex = energySources.findIndex(
            (item) => item.id === parseInt(id)
        );

        if (sourceIndex === -1) {
            return NextResponse.json(
                { message: "Fonte de energia não encontrada" },
                { status: 404 }
            );
        }

        energySources.splice(sourceIndex, 1);

        return NextResponse.json({
            message: "Fonte de energia removida com sucesso",
        });
    } catch (error) {
        console.error("Erro ao deletar fonte de energia:", error);
        return NextResponse.json(
            { message: "Erro ao deletar fonte de energia" },
            { status: 500 }
        );
    }
}

