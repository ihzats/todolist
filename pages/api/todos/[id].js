// Assuming you have properly imported and configured Prisma
import prisma from "@/lib/prisma"; // Adjust the import path accordingly

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === "DELETE") { // Corrected to uppercase
        try {
            await prisma.todo.delete({ where: { id: +id } });
            res.status(200).json({ message: "ok" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete todo item." });
        }
    } else {
        res.status(405).json({ error: "Method not allowed." });
    }
}

