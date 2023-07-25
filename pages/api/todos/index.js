import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const data = JSON.parse(req.body);
            await prisma.todo.create({
                data
            });

            res.status(200).json({ message: "ok" });
        } catch (error) {
            console.error("Error while creating Todo:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

